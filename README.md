<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Norman_Doppler_Radar_-_NOAA.jpg/640px-Norman_Doppler_Radar_-_NOAA.jpg" alt="thumbnail" width="300"/>

# ERAD2024 Open Radar Science Short Courses

[![DOI](https://zenodo.org/badge/784778069.svg)](https://zenodo.org/doi/10.5281/zenodo.13694510)
[![nightly-build](https://github.com/openradar/erad2024/actions/workflows/publish-book.yaml/badge.svg)](https://github.com/openradar/erad2024/actions/workflows/publish-book.yaml)
[![Binder](https://binder.projectpythia.org/badge_logo.svg)](https://binder.projectpythia.org/v2/gh/openradar/erad2024/main?labpath=notebooks)

This tutorial covers how to get started with the Open Radar Science stack!

## Motivation

The course will take place on 8 September 2024, the day before the [12th European Conference on RADar in meteorology and hydrology (ERAD2024)](https://www.erad2024.it/).
The course will discuss the principles of open science and provide an overview of the most mature and exciting software packages available for radar data processing
(ex.
[LROSE](https://github.com/NCAR/lrose-core),
[Py-ART](https://arm-doe.github.io/pyart/),
[pyrad](https://meteoswiss.github.io/pyrad/),
[BALTRAD](https://baltrad.github.io/),
[wradlib](https://docs.wradlib.org/en/latest/)
) and how they connect with the scientific software stack.

The course will be built with Jupyter Notebooks as hands-on approach for interactive user experience. The main course programming language is Python, but also Command Line Tools are used.

The course will also highlight the
[xradar](https://docs.openradarscience.org/projects/xradar/en/stable/)
package, implementing the newly adopted FM301/CfRadial2 WMO standard, as well as the
[gpm-api](https://gpm-api.readthedocs.io/en/latest/) software, which facilitates the
download and analysis of TRMM PR and GPM DPR spaceborne radars data. These two tools will be used to showcase how to harness the power of
[xarray](https://docs.xarray.dev/en/stable/) and [dask](https://docs.dask.org/en/stable/array.html)
for efficient, distributed radar data processing.

The course will cover operational use (e.g. in HPC environments or Cloud Infrastructure) as well as algorithm development, enabling the participants to implement their own algorithms.

The course will also show how to create workflows for different aspects of weather radar
data processing, using open datasets relevant to the attendees and ERAD2024.

## List of Instructors

- Alfonso Ladino, University of Illinois at Urbana-Champaign (UIUC)
- Anna del Moral Méndez, National Center for Atmospheric Research (NCAR)
- Brenda Javornik, National Center for Atmospheric Research (NCAR)
- Daniel Michelson, Environment and Climate Change Canada (ECCC)
- Daniel Wolfensberger, MeteoSwiss (MCH)
- Gionata Ghiggi, Ecole Polytechnique Fédérale de Lausanne (EPFL)
- Jen DeHart, Colorado State University (CSU)
- Jordi Figueras i Ventura, independent radar scientist
- Julian Giles, University of Bonn
- Kai Mühlbauer, University of Bonn
- Maxwell Grover, Argonne National Laboratory
- Mike Dixon, National Center for Atmospheric Research (NCAR)
- Robert Jackson, Argonne National Laboratory
- Scott Collis, Argonne National Laboratory
- Ting-Yu Cha, National Center for Atmospheric Research (NCAR)

### Contributors

<a href="https://github.com/openradar/erad2024/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=openradar/erad2024" />
</a>

## Course program

Please see the [schedule](schedule.md)

## Structure

### Tool Foundations
Content relevant to each of the Open Radar packages (ex. Py-ART, wradlib, LROSE, BALTRAD).

### Example Workflows
Workflows utilizing the various packages and open radar data.

## Things You Need to Prepare
Participants need to bring their own 64-bit notebook (Linux, Windows, Mac).  The exercises will take place on a cloud server. On Windows, the use of a ssh-client such as [Putty](https://www.putty.org/) or [MobaXterm](https://mobaxterm.mobatek.net/) will be necessary.
