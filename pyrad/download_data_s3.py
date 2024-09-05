###
# Download data from pythia bucket locally to use with pyrad workflows
###

import fsspec
import urllib.request
import os
from pathlib import Path

URL = "https://js2.jetstream-cloud.org:8001/"
path = f"pythia/radar/erad2024"
dir_path = os.path.dirname(os.path.realpath(__file__))

fs = fsspec.filesystem("s3", anon=True, client_kwargs=dict(endpoint_url=URL))
Xband_files = fs.glob(f"{path}/20240522_MeteoSwiss_ARPA_Lombardia/Data/Xband/*")
Cband_files = fs.glob(f"{path}/pyrad/Cband/*")
Xband_path = Path(dir_path, 'data', 'Xband')
if not os.path.exists(Xband_path):
    os.makedirs(Xband_path)
Cband_path = Path(dir_path, 'data', 'Cband')
if not os.path.exists("./data/Cband/"):
    os.makedirs(Path(Cband_path))

print(f"Download {len(Xband_files)} files to {Xband_path}")
for i, file in enumerate(Xband_files):
    print(f"{i+1}/{len(Xband_files)}")
    urllib.request.urlretrieve(f"{URL}{file}", Path(Xband_path, Path(file).name))
    
print(f"Download {len(Cband_files)} files to {Cband_path}")
for i, file in enumerate(Cband_files):
    print(f"{i+1}/{len(Cband_files)}")
    urllib.request.urlretrieve(f"{URL}{file}", Path(Cband_path, Path(file).name))
    
