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
  id: number;
  profile_url: string;
};
