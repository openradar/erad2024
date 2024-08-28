#%%
import pandas as pd
import numpy as np
fname='precip_data_20240522.csv'
df = pd.read_csv(fname, sep=',')

unique_sta = np.unique(df['StationID'])

for sta in unique_sta:
   df_sub =df[ df['StationID'] == sta]
   print(df_sub.columns)
   df_sub['Value'] *= 6
   df_sub.to_csv(f'./202405/20240522_{sta}.csv', index=False)
