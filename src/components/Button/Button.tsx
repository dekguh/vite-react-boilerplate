import React from 'react'
import { IButtonProps } from './typed.d'

const Button : React.FC<IButtonProps> = (props) => {
  const { children, rest } = props
  return (
    <button data-testid='button' {...rest}>{children}</button>
  )
}

export default Button