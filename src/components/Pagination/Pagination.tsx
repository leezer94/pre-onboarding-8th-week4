import * as S from './Pagination.style';

const Pagination = () => {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <S.Container>
      {number.map((item) => {
        return <S.NumberContainer key={item}>{item}</S.NumberContainer>;
      })}
    </S.Container>
  );
};

export default Pagination;
