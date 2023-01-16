import styled from 'styled-components';
import { FlexBoxProps } from 'types';

const FlexBox = styled.div<FlexBoxProps>`
  display: flex;

  align-items: ${({ alignItems }) => alignItems};
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex-flow: ${({ flexFlow }) => flexFlow};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection};
  ${({ css }) => css}
`;

export default FlexBox;
