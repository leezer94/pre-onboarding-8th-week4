import styled from 'styled-components';

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin: 0 auto;

  width: 90%;
  height: 70%;

  max-height: 70%;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-evenly;

  width: 100%;

  max-height: 300px;

  list-style: none;

  text-align: center;
  margin-top: 10px;

  padding: 10px;

  border-bottom: 1px solid lightgrey;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  align-items: center;

  justify-self: flex-end;
`;

export { Wrapper, ListItem, ButtonContainer };
