import { CSSProperties, ReactNode } from 'react';

declare type FlexBoxProps = {
  alignItems?: string;
  flexBasis?: string;
  flexFlow?: string;
  flexGrow?: string;
  flexShrink?: string;
  flexWrap?: string;
  justifyContent?: string;
  flexDirection?: string;
  css?: any;
  children?: ReactNode;
};

declare type POST = {
  author: string;
  content: string;
  createdAt: string;
  id: number | null;
  profile_url: string;
};

declare type InputProps = {
  id: string;
  name: string;
  label: string;
  type?: InputType;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
