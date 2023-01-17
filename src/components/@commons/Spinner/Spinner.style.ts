import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 40%;
  left: 35%;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  background-color: transparent;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div<{ size: string; speed: string }>`
  position: absolute;
  width: ${({ size }) => size};
  height: ${({ size }) => size};

  border: 5px solid ${({ theme }) => theme.lightgrey};
  border-top: 5px solid ${({ theme }) => theme.blue};
  border-radius: 50%;

  animation: ${rotate} ${({ speed }) => speed} linear infinite;

  background-color: 'transparent';
  margin: 0 10px 20px 20px;
`;

export { Container };

export default Spinner;
