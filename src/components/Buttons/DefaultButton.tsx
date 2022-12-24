import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const DefaultButton: FC<ButtonProps> = ({ children }) => {
  return <button>{children}</button>
}

export default DefaultButton
