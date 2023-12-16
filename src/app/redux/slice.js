import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCompanies = createAsyncThunk('company/fetchCompanies', async () => {
  const response = await axios.get('http://139.59.35.127/production/propsoft-api/public/api/get-all-companys');
  // console.log(response);
  return response.data.companys.data;
});

const companySlice = createSlice({
  name: 'company',
  initialState: {
    companies: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.companies = action.payload;
      })
      .addCase(fetchCompanies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default companySlice.reducer;
