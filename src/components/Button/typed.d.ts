import React from 'react'

export interface IButtonProps {
  children: React.ReactNode | JSX.Element;
  rest?: {[key: string]: number | string | boolean;};
}