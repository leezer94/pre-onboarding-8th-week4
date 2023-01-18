import {
  useCreateCommentMutation,
  useGetCommentsQuery,
  useUpdateCommentMutation,
} from 'api/apiSlice';
import { Button } from 'components/@commons';
import useForm from 'hooks/useForm';
import { Dispatch, FormEvent, SetStateAction } from 'react';

import * as S from './Form.style';
import useCurrentPage from '../../hooks/useCurrentPage';

type FormProps = {
  type: string;
  setPostStatus: Dispatch<SetStateAction<'create' | 'modify'>>;
};

const Form = ({ type, setPostStatus }: FormProps) => {
  const { profileUrls } = useGetCommentsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      profileUrls: data?.map(({ profile_url: profileUrl }) => profileUrl),
    }),
  });

  const [createComment] = useCreateCommentMutation();
  const [updateComment] = useUpdateCommentMutation();
  const { handleCurrentPage } = useCurrentPage();
  const { formState, handleChange, handleResetForm } = useForm();

  const handleCreateComment = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    createComment(formState);
    handleResetForm({
      id: null,
      profile_url: '',
      author: '',
      content: '',
      createdAt: '',
    });
    handleCurrentPage(1);
  };

  const handleModifyComment = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    updateComment(formState);
    setPostStatus('create');
    handleResetForm({
      id: null,
      profile_url: '',
      author: '',
      content: '',
      createdAt: '',
    });
  };

  return (
    <S.Form
      onSubmit={(e) => {
        e.preventDefault();

        return type === 'create'
          ? handleCreateComment(e)
          : type === 'modify'
          ? handleModifyComment(e)
          : null;
      }}
    >
      <input
        name='profile_url'
        type='list'
        placeholder='프로필 이미지 ( 리스트 선택 가능 )'
        style={{ height: '30px' }}
        list='urlList'
        value={formState.profile_url}
        onChange={handleChange}
      />
      <datalist id='urlList' style={{ width: '100%' }}>
        {profileUrls?.map((url, idx) => (
          <option key={idx} value={url} />
        ))}
      </datalist>
      <input
        name='author'
        type='text'
        placeholder='작성자'
        style={{ height: '30px' }}
        value={formState.author}
        onChange={handleChange}
      />
      <textarea
        name='content'
        placeholder='내용을 입력해 주세요.'
        style={{ resize: 'none', height: '100px' }}
        value={formState.content}
        onChange={handleChange}
      />
      <input
        name='createdAt'
        type='text'
        placeholder='작성일'
        style={{ height: '30px' }}
        value={formState.createdAt}
        onChange={handleChange}
      />
      <Button type='submit' content='등록' />
    </S.Form>
  );
};

export default Form;
