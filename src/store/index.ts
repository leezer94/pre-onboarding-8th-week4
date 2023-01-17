import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from 'api/apiSlice';
import currentPageReducer from 'slices/currentPageSlice';
import formDetailReducer from 'slices/formDataSlice';

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    formDetail: formDetailReducer,
    currentPage: currentPageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
