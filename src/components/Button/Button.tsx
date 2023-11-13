import React from 'react'
import { IButtonProps } from './typed.d'

const Button : React.FC<IButtonProps> = (props) => {
  const { children } = props
  return (
    <button>{children}</button>
  )
}

export default Button