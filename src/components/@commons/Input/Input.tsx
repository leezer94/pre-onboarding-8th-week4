import { forwardRef } from 'react';
import { InputProps } from 'types';

export type InputType = 'text';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, label, type = 'text', list, placeholder, css }, ref) => {
    return (
      <input
        ref={ref}
        name={name}
        type={type}
        aria-label={label}
        placeholder={placeholder}
        style={css}
        list={list}
      />
    );
  },
);

Input.displayName = 'Input';

export default Input;
