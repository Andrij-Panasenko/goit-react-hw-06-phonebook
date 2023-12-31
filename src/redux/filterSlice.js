import { createSlice } from '@reduxjs/toolkit';

const initialState = {value: ''}

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
     setFilter(state, action) {
        state.value = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const {setFilter} = filterSlice.actions;

//selector
export const getFilterValue = state => state.filter.value;