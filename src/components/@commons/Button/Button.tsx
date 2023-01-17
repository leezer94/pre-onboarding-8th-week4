import { CSSProperties } from 'react';

import * as S from './Button.style';

type ButtonProps = {
  type: 'button' | 'submit';
  content: string;
  disabled?: boolean;
  css?: CSSProperties;
  onClick?: (arg?: any) => void;
};

const Button = ({
  type = 'button',
  content,
  onClick,
  disabled = false,
  css,
}: ButtonProps) => {
  return (
    <S.Button type={type} disabled={disabled} onClick={onClick} style={css}>
      {content}
    </S.Button>
  );
};

export default Button;
