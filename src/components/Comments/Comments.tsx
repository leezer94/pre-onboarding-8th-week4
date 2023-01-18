import { useDeleteCommentByIdMutation } from 'api/apiSlice';
import { Flex, Button } from 'components/@commons';
import useForm from 'hooks/useForm';
import { Dispatch, SetStateAction } from 'react';
import { POST } from 'types';

import * as S from './Comments.style';
import useCurrentPage from '../../hooks/useCurrentPage';
import Avatar from '../@commons/Avatar/Avatar';

const Comments = ({
  commentsList,
  setPostStatus,
}: {
  commentsList?: POST[];
  setPostStatus: Dispatch<SetStateAction<'create' | 'modify'>>;
}) => {
  const { handleCurrentPage } = useCurrentPage();
  const [deleteComment] = useDeleteCommentByIdMutation();

  const { handleModifyFormDetail } = useForm();

  const handleModifyComment = (comment: POST) => {
    handleModifyFormDetail(comment);
    setPostStatus('modify');
  };

  const handleDeleteComment = (id: number | null) => {
    deleteComment(id);
    handleCurrentPage(1);
  };

  return (
    <S.Wrapper>
      {commentsList?.map(({ id, profile_url, author, content, createdAt }) => (
        <S.ListItem key={id}>
          <Flex flexDirection='column'>
            <Avatar src={profile_url} author={author} size='50px' />
            <span>{author}</span>
          </Flex>
          <Flex
            flexDirection='column'
            justifyContent='space-around'
            css={{ width: '300px' }}
          >
            {content}
            <span>{createdAt}</span>
          </Flex>
          <S.ButtonContainer>
            <Button
              type='submit'
              content='수정'
              onClick={() =>
                handleModifyComment({
                  id,
                  profile_url,
                  author,
                  content,
                  createdAt,
                })
              }
            />
            <Button
              type='submit'
              content='삭제'
              onClick={() => handleDeleteComment(id)}
            />
          </S.ButtonContainer>
        </S.ListItem>
      ))}
    </S.Wrapper>
  );
};

export default Comments;
