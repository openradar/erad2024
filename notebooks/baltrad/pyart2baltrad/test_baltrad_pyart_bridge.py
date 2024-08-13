""" Unit tests for baltrad_pyart_bridge.py module. """

import numpy as np
from numpy.testing import assert_array_equal, assert_allclose

import baltrad_pyart_bridge as bridge
import _raveio

SCAN_FILENAME = 'data/Example_scan.h5'
PVOL_FILENAME = 'data/Example_pvol.h5'


def test_raveio2radar_scan():
    rio = _raveio.open(SCAN_FILENAME)
    radar = bridge.raveio2radar(rio)


def test_raveio2radar_pvol():
    rio = _raveio.open(PVOL_FILENAME)
    radar = bridge.raveio2radar(rio)

    # latitude, longitude, altitude
    assert round(radar.latitude['data'], 2) == 58.11
    assert round(radar.longitude['data'], 2) == 15.94
    assert round(radar.altitude['data'], 2) == 222.0

    # metadata
    assert radar.metadata['source'] == (
        'WMO:02570,PLC:Norrk\xc3\xb6ping,RAD:SE53,NOD:senkp')
    assert radar.metadata['original_container'] == 'odim_h5'

    # sweep_start_ray_index, sweep_end_ray_index
    # radar consists of 6 sweeps each containing 361 rays
    assert_array_equal(radar.sweep_start_ray_index['data'],
                       np.arange(6) * 361)
    assert_array_equal(radar.sweep_end_ray_index['data'],
                       np.arange(6) * 361 + 360)

    # sweep_number, sweep_mode, scan_type
    assert_array_equal(radar.sweep_number['data'], np.arange(6))
    assert_array_equal(radar.sweep_mode['data'],
                       ['azimuth_surveillance'] * 6)
    assert radar.scan_type == 'ppi'

    # fixed_angle
    assert_allclose(radar.fixed_angle['data'],
                    [0.0, 1.1, 23.5, 28.2, 33.7, 40.0])

    # elevation, check each sweep
    assert np.allclose(radar.elevation['data'][:361], 0.0)
    assert np.allclose(radar.elevation['data'][361:722], 1.1)
    assert np.allclose(radar.elevation['data'][722:1083], 23.5)
    assert np.allclose(radar.elevation['data'][1083:1444], 28.2)
    assert np.allclose(radar.elevation['data'][1444:1805], 33.7)
    assert np.allclose(radar.elevation['data'][1805:], 40.0)

    # range
    assert_allclose(radar.range['data'], np.arange(800) * 250)

    # azimuth
    assert round(radar.azimuth['data'][10], 2) == 10.04
    assert round(radar.azimuth['data'][361 + 10], 2) == 10.03
    assert round(radar.azimuth['data'][722 + 10], 2) == 10.01
    assert round(radar.azimuth['data'][1083 + 10], 2) == 10.03
    assert round(radar.azimuth['data'][1444 + 10], 2) == 10.04
    assert round(radar.azimuth['data'][1805 + 10], 2) == 10.02

    # time
    assert radar.time['units'] == 'seconds since 2012-02-26T10:27:51Z'
    assert radar.time['data'][0] == 0
    assert radar.time['data'][-1] == 236

    # additional radar attributes
    assert radar.nsweeps == 6
    assert radar.ngates == 800
    assert radar.nrays == 2166


if __name__ == "__main__":
    test_read_pvol()
