import { FlexBoxProps } from 'types';

import FlexBox from './FlexBox.style';

const Flex = (props: FlexBoxProps) => {
  const { children, ...rest } = props;

  return <FlexBox {...rest}>{children}</FlexBox>;
};

export default Flex;
