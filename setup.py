
# coding: utf-8

# In[1]:


import pandas as pd


# In[2]:


df=pd.read_excel("Sample.xlsx")


# In[3]:


df


# In[4]:


df.columns


# In[8]:


df.to_excel("new.xlsx", columns = ['First Name','State'])


# In[9]:


df1 = pd.read_excel("new.xlsx")


# In[10]:


df1

