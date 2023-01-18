import { useCallback, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFormDetail } from 'slices/formDataSlice';
import { POST } from 'types';

const useForm = () => {
  const dispatch = useDispatch();
  const formState = useSelector((state: any) => state.formDetail);

  const handleSetFormDetail = useCallback(
    (state: POST) => dispatch(setFormDetail(state)),
    [dispatch],
  );

  const handleChange = (e: ChangeEvent<HTMLElement | any>) => {
    const { name, value } = e.target;

    handleSetFormDetail({ ...formState, [name]: value });
  };

  const handleModifyFormDetail = (newDetail: POST) => {
    handleSetFormDetail({ ...newDetail });
  };

  const handleResetForm = (initialState: POST) => {
    handleSetFormDetail(initialState);
  };

  return {
    formState,
    handleChange,
    handleModifyFormDetail,
    handleResetForm,
  };
};

export default useForm;
