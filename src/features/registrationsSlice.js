import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addRegistration, getRegistrations } from '../api/eventsAPI';

// ✅ Fetch all registrations
export const fetchRegistrations = createAsyncThunk(
  'registrations/fetchRegistrations',
  async () => {
    const response = await getRegistrations();
    return response;
  }
);

// ✅ Add new registration
export const createRegistration = createAsyncThunk(
  'registrations/createRegistration',
  async (registrationData) => {
    const response = await addRegistration(registrationData);
    return response;
  }
);

const registrationsSlice = createSlice({
  name: 'registrations',
  initialState: {
    list: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegistrations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRegistrations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchRegistrations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createRegistration.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  }
});

export default registrationsSlice.reducer;
