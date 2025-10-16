import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getEvents } from '../api/eventsAPI';
import { saveEventOrder, loadEventOrder } from '../utils/localStorageHelper';

// ✅ Async thunk to fetch events from API
export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
  const response = await getEvents();
  return response;
});

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    list: [],
    status: 'idle',
    error: null
  },
  reducers: {
    reorderEvents: (state, action) => {
      state.list = action.payload;
      saveEventOrder(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        const savedOrder = loadEventOrder();
        if (savedOrder.length > 0) {
          // Reorder based on saved order
          state.list = savedOrder.map(
            (saved) => action.payload.find((event) => event.id === saved.id)
          );
        } else {
          state.list = action.payload;
        }
        state.status = 'succeeded';
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { reorderEvents } = eventsSlice.actions;
export default eventsSlice.reducer;
