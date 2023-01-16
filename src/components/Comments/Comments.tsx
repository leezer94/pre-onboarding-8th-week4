import {
  useDeleteCommentByIdMutation,
  useGetCommentsQuery,
} from 'api/apiSlice';
import { Flex, LoadingSpinner } from 'components/@commons';
import Button from 'components/@commons/Button/Button';

import * as S from './Comments.style';
import Avatar from '../@commons/Avatar/Avatar';

const Comments = () => {
  const { data: commentsList, isLoading } = useGetCommentsQuery();
  const [deleteComment] = useDeleteCommentByIdMutation();

  if (isLoading) {
    return <LoadingSpinner size='100px' />;
  }

  return (
    <S.Wrapper>
      {commentsList?.map(
        ({ id, profile_url: profileUrl, author, content, createdAt }) => (
          <S.ListItem key={id}>
            <Flex flexDirection='column'>
              <Avatar src={profileUrl} author={author} size='50px' />
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
                onClick={() => console.log(id, author)}
              />
              <Button
                type='submit'
                content='삭제'
                onClick={() => deleteComment(id)}
              />
            </S.ButtonContainer>
          </S.ListItem>
        ),
      )}
    </S.Wrapper>
  );
};

export default Comments;
