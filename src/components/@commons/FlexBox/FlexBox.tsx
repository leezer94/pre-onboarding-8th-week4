import { FlexBoxProps } from 'types';

import FlexBox from './FlexBox.style';

const Flex = ({ children, ...rest }: FlexBoxProps) => {
  return <FlexBox {...rest}>{children}</FlexBox>;
};

export default Flex;
