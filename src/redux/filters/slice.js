import { createSlice } from '@reduxjs/toolkit';

export const selectNameFilter = state => state.filters.name;

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter(state, { payload }) {
      state.name = payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
