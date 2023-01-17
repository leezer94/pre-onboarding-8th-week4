import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from 'slices/currentPageSlice';

const useCurrentPage = () => {
  const dispatch = useDispatch();

  return {
    currentPage: useSelector(
      (state: { currentPage: number }) => state.currentPage,
    ),
    handleCurrentPage: useCallback(
      (state: number) => dispatch(setCurrentPage(state)),
      [dispatch],
    ),
  };
};

export default useCurrentPage;
