/* eslint-disable camelcase */

import { createSlice } from '@reduxjs/toolkit';

const formDetailSlice = createSlice({
  name: 'formDetail',
  initialState: {
    id: null,
    profile_url: '',
    author: '',
    content: '',
    createdAt: '',
  },
  reducers: {
    setFormDetail: (state, action) => (state = action.payload),
  },
});

export default formDetailSlice.reducer;

export const { setFormDetail } = formDetailSlice.actions;
