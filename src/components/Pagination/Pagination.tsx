import { useGetCommentsQuery } from 'api/apiSlice';
import { Button } from 'components/@commons';

import * as S from './Pagination.style';
import useCurrentPage from '../../hooks/useCurrentPage';

type PaginationProps = {
  limit: number;
};

const Pagination = ({ limit }: PaginationProps) => {
  const { currentPage, handleCurrentPage } = useCurrentPage();
  const { pageNumbersArray, isLoading } = useGetCommentsQuery(undefined, {
    selectFromResult: ({ data, error, isLoading }) => ({
      pageNumbersArray: data
        ? Array.from({ length: Math.ceil(data?.length / limit) })
        : [],
      error,
      isLoading,
    }),
  });

  if (isLoading) {
    return <div>데이터 불러오는중 ...</div>;
  }

  return (
    <S.Container>
      {pageNumbersArray?.map((_, i) => {
        return (
          <Button
            type='button'
            key={i}
            content={(i + 1).toString()}
            onClick={() => handleCurrentPage(i + 1)}
            css={{
              borderRadius: '50px',
              backgroundColor: currentPage === i + 1 ? 'lightgrey' : 'white',
            }}
          />
        );
      })}
    </S.Container>
  );
};

export default Pagination;
