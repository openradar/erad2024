"""
Copyright (C) 2014- Swedish Meteorological and Hydrological Institute (SMHI)

This file is part of RAVE.

RAVE is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

RAVE is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
See the GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with RAVE.  If not, see <http://www.gnu.org/licenses/>.
"""
## Mapping of RAVE to/from Py-ART

## @file
## @author Daniel Michelson (SMHI) and Jonathan Helmus (ARM)
## @date 2014-08-19

import time, datetime
import math

import numpy as np

try:
    from pyart.config import FileMetadata, get_fillvalue
    from pyart.core.radar import Radar
    from pyart.io.common import make_time_unit_str
except ImportError:
    raise ImportError("Can't find Py-ART. Please install it.")
import netCDF4

try:
    import _rave
    import _raveio
    import _projection
    import _polarvolume
    import _polarscan
    import _polarscanparam
except ImportError:
    raise ImportError("Can't find RAVE. Please install it.")

dr = math.pi / 180.0
rd = 180.0 / math.pi

## Takes a Py-ART radar object and maps it to a RAVE polar scan or volume
# @param radar Py-ART radar object
# @return RaveIO object
def radar2raveio(radar):
    """ Map a Py-ART Radar object to a RAVE polar scan or volume """
    # If the radar object contains a single scan, then we return a _polarscan
    # otherwise a _polarvolume
    if radar.nsweeps > 1:
        obj = _polarvolume.new()
    else:
        obj = _polarscan.new()

    # Set top-level attributes
    if (radar.metadata is not None) and ('source' in radar.metadata):
        obj.source = str(radar.metadata["source"])
    # "nominal" time (the time the radar started acqusition)
    # Py-ART Radar object do not store this, use the start time.
    dt_start = datetime.datetime.strptime(
        radar.time['units'][14:], '%Y-%m-%dT%H:%M:%SZ')
    obj.date = dt_start.strftime('%Y%m%d')
    obj.time = dt_start.strftime('%H%M%S')
    obj.height = radar.altitude["data"][0]
    obj.longitude = radar.longitude["data"][0] * dr
    obj.latitude = radar.latitude["data"][0] * dr
    obj.beamwidth = (
        radar.instrument_parameters['radar_beam_width_h']['data'][0] * dr)

    # record data in each scan
    if radar.nsweeps == 1:
        _fillscan(obj, radar)
    else:
        for i in range(radar.nsweeps):
            scan = _polarscan.new()
            scan.longitude, scan.latitude = obj.longitude, obj.latitude
            scan.height = obj.height
            _fillscan(scan, radar, index=i)
            obj.addScan(scan)
    rio = _raveio.new()
    rio.object = obj
    return rio


## Fills a scan object with data and metadata from the radar object for sweep
# at index.
# @param scan PolarScan object
# @param radar radar object
# @param index int sweep index with base=0
def _fillscan(scan, radar, index=0):
    """ Fill a RAVE scan with data and metadata from a radar object. """

    startray = radar.sweep_start_ray_index['data'][index]
    stopray = radar.sweep_end_ray_index['data'][index]
    sweep_times = radar.time['data'][startray:stopray+1]

    # Dataset-specific 'where'
    scan.elangle = radar.elevation["data"][startray] * dr
    scan.rstart = float(radar.range["meters_to_center_of_first_gate"])
    scan.rscale = float(radar.range["meters_between_gates"])
    scan.a1gate = int(np.argmin(sweep_times) + startray)
    # These are not settable in RAVE
    #scan.nrays = stopray - startray + 1
    #scan.nbins = radar.ngates

    # Dataset-specific 'what'
    dt_start = netCDF4.num2date(sweep_times.min(), radar.time['units'])
    scan.startdate = dt_start.strftime('%Y%m%d')
    scan.starttime = dt_start.strftime('%H%M%S')
    dt_end = netCDF4.num2date(sweep_times.max(), radar.time['units'])
    scan.enddate = dt_end.strftime('%Y%m%d')
    scan.endtime = dt_end.strftime('%H%M%S')

    # Dataset-specific 'how'.
    # Such optional attributes have to be named specifically.
    scan.addAttribute("how/startazA",
                      radar.azimuth["data"][startray:stopray+1])

    # Quantity/parameter-specific 'what'
    # Py-ART delagates any scaling and offset of data to the
    # field 'data' dictionary object, only the 'final' values are available
    # for general purpose use.  In additional all bad/missing/undetected
    # data is indicated by possible masking.
    # RAVE has conventions for scaling/offset and missing data vs undetected
    # data. These are not used here.
    for quant in radar.fields.keys():
        param = _polarscanparam.new()
        param.quantity = str(quant)
        param.gain = 1.0    # See above discussion
        param.offset = 0.0
        param.nodata = get_fillvalue()
        param.undetect = get_fillvalue()
        sweep_data = radar.fields[quant]['data'][startray:stopray+1]
        param.setData(np.ma.filled(sweep_data, get_fillvalue()))
        scan.addParameter(param)

    # Unambiguous velocity (Nyquist interval)
    if radar.instrument_parameters is not None:
        inst_params = radar.instrument_parameters
        if 'nyquist_velocity' in inst_params:
            scan.addAttribute(
                'how/NI',
                float(inst_params['nyquist_velocity']['data'][startray]))

    # Site-specific navigation with PROJ.4. to make the object "transformable"
    scan.projection = _projection.new(
        'longlat',
        'Site-specific longlat projection',
        '+proj=latlong +ellps=WGS84 +datum=WGS84')
    return


## Reads an ODIM_H5 file and returns a Py-ART radar object
# @param rio RaveIO object
# @return radar object
def raveio2radar(rio, raw=False):
    """
    Map a RaveIO object to a Py-ART Radar.

    Parameters
    ----------
    rio : RaveIOCore
        RaveIO object to read data from.
    raw : bool
        True to return unmasked, unscaled data.  False returns data
        with gain, offset and mask applied.

    Returns
    -------
    radar : Radar
        Py-ART radar object containting data.

    """

    # create metadata retrieval object
    # TODO default mappings, metadata, etc
    # TODO proper Py-ART reading (file_field_name, etc)
    filemetadata = FileMetadata('odim_h5')

    # determine some key parameters
    if rio.objectType is _rave.Rave_ObjectType_SCAN:
        nsweeps = 1
        first_scan = rio.object
    elif rio.objectType is _rave.Rave_ObjectType_PVOL:
        nsweeps = rio.object.getNumberOfScans()
        first_scan = rio.object.getScan(0)
    else:
        raise TypeError(
            "Unsupported object, only SCANs and PVOLs supported.")
    rays_per_sweep = _collect_attrs(rio, 'nrays')
    total_rays = np.sum(rays_per_sweep)
    bins_per_sweep = np.array(_collect_attrs(rio, 'nbins'))
    max_bins = np.max(bins_per_sweep)   # maximim number of bins in any sweep.
    #if np.any(bins_per_sweep != max_bins):
        # TODO fix to support non-uniform number of bins with masking
    #    raise NotImplementedError('Non-uniform bins not supported yet')

    # latitude, longitude and altitude
    latitude = filemetadata('latitude')
    longitude = filemetadata('longitude')
    altitude = filemetadata('altitude')
    latitude['data'] = np.array([first_scan.latitude * rd])
    longitude['data'] = np.array([first_scan.longitude * rd])
    altitude['data'] = np.array([first_scan.height])

    # metadata
    metadata = filemetadata('metadata')
    metadata['source'] = first_scan.source
    metadata['original_container'] = 'odim_h5'

    # sweep_start_ray_index, sweep_end_ray_index
    # Not to be confused with where/a1gate
    sweep_start_ray_index = filemetadata('sweep_start_ray_index')
    sweep_end_ray_index = filemetadata('sweep_end_ray_index')
    sweep_start_ray_index['data'] = np.cumsum(
        np.append([0], rays_per_sweep[:-1])).astype('int32')
    sweep_end_ray_index['data'] = np.cumsum(
        rays_per_sweep).astype('int32') - 1

    # sweep_number
    sweep_number = filemetadata('sweep_number')
    sweep_number['data'] = np.arange(nsweeps, dtype='int32')

    # sweep_mode
    sweep_mode = filemetadata('sweep_mode')
    sweep_mode['data'] = np.array(nsweeps * ['azimuth_surveillance'])

    # scan_type
    scan_type = 'ppi'

    # fixed_angle, elevation
    sweep_el = np.array(_collect_attrs(rio, 'elangle')) * rd
    fixed_angle = filemetadata('fixed_angle')
    elevation = filemetadata('elevation')
    fixed_angle['data'] = np.array(sweep_el, dtype='float32')
    # A better solution is to use the elevation angles for each ray if
    # available in how/startelA, how/stopelA in ODIM_H5 v2.2
    elevation['data'] = np.repeat(sweep_el, rays_per_sweep).astype('float32')

    # range
    # Check that gate spacing is constant for all scans.
    # The Py-ART Radar object does not support radar data where the
    # gate spacing is not constant for all radials.
    # Data of this type raises a TypeError exception.
    rscales = np.array(_collect_attrs(rio, 'rscale'))
    rstarts = np.array(_collect_attrs(rio, 'rstart'))
    if np.any(rscales[0] != rscales) or np.any(rstarts != rstarts[0]):
        raise TypeError(
            "Py-ART cannot handle volumes containing scans with",
            "different (bin) gate spacings.")
    # This is a generalization, but we'll live with it.
    _range = filemetadata('range')
    _range['data'] = (np.arange(max_bins, dtype='float32') * rscales[0] +
                      rstarts[0])
    _range['meters_to_center_of_first_gate'] = float(rstarts[0])
    _range['meters_between_gates'] = float(rscales[0])

    # azimuth
    # azimuth angle for all rays collected in the volume
    azimuth = filemetadata('azimuth')
    az_data = np.ones((total_rays, ), dtype='float32')
    # loop over the sweeps, store the starting azimuth angles.
    # an average of the startazA and stopazA would probably be a better
    # estimate, but the discontinuity between 0 and 360 would need to be
    # addressed. This is attempted if startazA is available.
    start = 0
    if rio.objectType is _rave.Rave_ObjectType_SCAN:
        if 'how/startazA' in first_scan.getAttributeNames():
            sweep_az = first_scan.getAttribute('how/startazA')
            sweep_az = np.where(np.greater(sweep_az, 360.0),
                                sweep_az-360.0, sweep_az)
            az_data[start:start+first_scan.nrays] = sweep_az
        else:
            az_data = np.arange(first_scan.nrays)+(360./first_scan.nrays/2)

    elif rio.objectType is _rave.Rave_ObjectType_PVOL:
        for s in range(nsweeps):
            scan = rio.object.getScan(s)
            if 'how/startazA' in scan.getAttributeNames():
                sweep_az = scan.getAttribute('how/startazA')
                sweep_az = np.where(np.greater(sweep_az, 360.0),
                                    sweep_az-360.0, sweep_az)
                az_data[start:start+scan.nrays] = sweep_az
                start += scan.nrays
            else:
                az_data[start:start+scan.nrays] = (
                    np.arange(scan.nrays)+(360./scan.nrays/2))
    azimuth['data'] = az_data

    # time
    # Since startazT and stopazT do not appear to be present in all files
    # and the startepochs and endepochs attributes appear the same for
    # each sweep, just interpolate between these values.
    # XXX This is does not seem correct.
    _time = filemetadata('time')
    attrnames = first_scan.getAttributeNames()
    if 'how/startepochs' in attrnames and 'how/stopepochs' in attrnames:
        start_epoch = first_scan.getAttribute('how/startepochs')
        end_epoch = first_scan.getAttribute('how/stopepochs')
    else:
        start_epoch = time.mktime(datetime.datetime.strptime(
            first_scan.startdate+first_scan.starttime,
            "%Y%m%d%H%M%S").timetuple())
        end_epoch = time.mktime(datetime.datetime.strptime(
            first_scan.enddate+first_scan.endtime, "%Y%m%d%H%M%S").timetuple())
    start_time = datetime.datetime.utcfromtimestamp(start_epoch)
    delta_sec = end_epoch - start_epoch
    _time['units'] = make_time_unit_str(start_time)
    _time['data'] = np.linspace(0, delta_sec, total_rays).astype('float32')

    # fields
    # This assumes that all fields are available in all scans and that
    # the quantities are ordered the same way in each scan.
    # This may not always be true and could cause issues. XXX
    fields = {}
    rave_field_names = first_scan.getParameterNames()
    # loop over the fields, create a field dictionary for each field
    for i, rave_field_name in enumerate(rave_field_names):
        # Assumes the same dtype for each quantity. Potentially dangerous.
        field_data = np.ma.zeros((total_rays, max_bins), dtype='float32')
        start = 0
        # loop over the sweeps, copy data into correct location of data array
        if rio.objectType is _rave.Rave_ObjectType_SCAN:
            sweep_data = _get_scan_data(first_scan, rave_field_name, raw)
            field_data[start:start + first_scan.nrays] = sweep_data[:]
        elif rio.objectType is _rave.Rave_ObjectType_PVOL:
            for i in range(nsweeps):
                scan = rio.object.getScan(i)
                sweep_data = _get_scan_data(scan, rave_field_name, raw)
                field_data[start:start+scan.nrays, :scan.nbins] = sweep_data[:]
                field_data[start:start+scan.nrays, scan.nbins:] = np.ma.masked
                start += scan.nrays
        field_dic = filemetadata(rave_field_name)
        field_dic['data'] = field_data
        fields[rave_field_name] = field_dic

    # instrument_parameters
    beam_width_h = filemetadata.get_metadata('radar_beam_width_h')
    beam_width_h['data'] = np.array([first_scan.beamwidth * rd],
                                    dtype='float32')
    # TODO unambiguous_range (nyquist), etc
    instrument_parameters = {'radar_beam_width_h': beam_width_h}

    return Radar(
        _time, _range, fields, metadata, scan_type,
        latitude, longitude, altitude,
        sweep_number, sweep_mode, fixed_angle, sweep_start_ray_index,
        sweep_end_ray_index,
        azimuth, elevation,
        instrument_parameters=instrument_parameters)


def _get_scan_data(scan, parameter, raw=False):
    """ Get data from a RaveIO scan, apply gain, offset and mask. """
    param = scan.getParameter(parameter)
    scan_data = param.getData()
    if scan_data.dtype == np.int16:     # XXX Hack
        scan_data.dtype = np.uint16
    if raw:
        return scan_data
    masked_scan_data = np.ma.masked_array(scan_data)
    masked_scan_data[scan_data == param.nodata] = np.ma.masked
    masked_scan_data[scan_data == param.undetect] = np.ma.masked
    scaled_masked_scan_data = masked_scan_data * param.gain + param.offset
    return scaled_masked_scan_data


def _collect_attrs(rio, attr):
    """ Create a list of an attribute for all scans of a RaveIO object. """
    if rio.objectType is _rave.Rave_ObjectType_SCAN:
        collected = [getattr(rio.object, attr)]
    elif rio.objectType is _rave.Rave_ObjectType_PVOL:
        collected = [getattr(rio.object.getScan(i), attr) for i in
                     range(rio.object.getNumberOfScans())]
    return collected
