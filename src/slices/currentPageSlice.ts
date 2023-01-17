/* eslint-disable camelcase */

import { createSlice } from '@reduxjs/toolkit';

const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState: 1,
  reducers: {
    setCurrentPage: (state, action) => (state = action.payload),
  },
});

export default currentPageSlice.reducer;

export const { setCurrentPage } = currentPageSlice.actions;
