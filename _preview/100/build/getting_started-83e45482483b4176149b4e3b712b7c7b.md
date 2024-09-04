# Notebook Execution

There are two options to work with this course, via Project Pythia Hub and locally on your machine.

## Project Pythia Hub

Just use the `enable computing` button within a notebook on this site to run each cell individually, rendering the output immediately to html.
A second option, and the preferred one for this course is to fire up a jupyterlab instance on the Project Pythia Hub via the [Launch Environment](https://binder.projectpythia.org/v2/gh/openradar/erad2024/main?labpath=notebooks)-Button
on the top right navigation bar. You'll find yourself in the well known jupyterlab environment, ready to do some science.

## Locally on your own premises

The easiest is to make use of our pre-built docker image which includes all the needed bits and pieces and is actually also
used as base image for the Project Pythia Hub instance.

The only thing you need is a running docker service on your local machine.

Then it's just a one-liner:

```bash
$ docker run -ti --name erad2024 -p 8888:8888 -e LOCAL_USER_ID=$UID ghcr.io/openradar/erad2024:latest /srv/conda/envs/notebook/bin/jupyter lab --ip='*' --port=8888
```
Some of the notebooks are utilizing quite some large cloud data files. So a decent network connection (LAN connection) is preferred to make use of those notebooks.
Don't try this at the course as bandwidth will be limited.

If you need a connection to the outside world, you can mount local folders and environment variables into the running container. Please check out the [docker documentation](https://docs.docker.com/guides/use-case/jupyter/) for more details

```bash
$ docker run -ti --name erad2024 -p 8888:8888 -v /host/path/to/your/folder:/home/your/folder -e LOCAL_USER_ID=$UID -e YOUR_ENV_VAR=your_env_var ghcr.io/openradar/erad2024:latest /srv/conda/envs/notebook/bin/jupyter lab --ip='*' --port=8888

```
