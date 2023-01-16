import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 70%;
  height: 10%;

  margin: 0 auto;

  justify-content: space-around;
  align-items: center;
  align-self: flex-end;
`;

const NumberContainer = styled.div`
  display: flex;
  text-align: center;

  justify-content: center;
  align-items: center;

  border-radius: 10px;

  width: 5%;
  height: 30%;

  padding: 10px;

  border: 1px solid black;
`;

export { Container, NumberContainer };
