# -*- coding: utf-8 -*-
"""
Created on Thu Jul 19 09:51:33 2018

@author: woodsaa
"""

import pandas as pd
df=pd.read_excel("Sample.xlsx")
df.columns
df.to_excel("new.xlsx", columns = ['First Name','State'])
df1 = pd.read_excel("new.xlsx")