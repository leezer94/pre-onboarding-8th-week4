import { useGetPaginatedCommentsQuery } from 'api/apiSlice';
import { Flex, LoadingSpinner } from 'components/@commons';
import Form from 'components/Form/Form';
import Pagination from 'components/Pagination/Pagination';
import { useState } from 'react';

import Comments from '../components/Comments/Comments';
import useCurrentPage from '../hooks/useCurrentPage';

const PAGE_LIMIT = 6 as const;

const Main = () => {
  const [postStatus, setPostStatus] = useState<'create' | 'modify'>('create');
  const { currentPage } = useCurrentPage();
  const { data: commentsList, isLoading } = useGetPaginatedCommentsQuery({
    page: currentPage,
    limit: PAGE_LIMIT,
  });

  if (isLoading) {
    return <LoadingSpinner size='100px' />;
  }

  console.log(postStatus);
  return (
    <Flex
      justifyContent='center'
      flexDirection='column'
      css={{
        width: '50%',
        margin: '0 auto',
        height: '950px',
        padding: '10px',
      }}
    >
      <Comments commentsList={commentsList} setPostStatus={setPostStatus} />
      <Form type={postStatus} setPostStatus={setPostStatus} />
      <Pagination limit={PAGE_LIMIT} />
    </Flex>
  );
};

export default Main;
