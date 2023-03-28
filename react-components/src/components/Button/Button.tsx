import React, { FC, ReactNode } from 'react'

import styles from './Button.module.scss'

interface ButtonProps {
  className?: string
  children: ReactNode
  isDisabled?: boolean
  outlined?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'submit'
}

const Button: FC<ButtonProps> = () => {
  return (
    <button type="submit" className={styles.button}>
      Submit
    </button>
  )
}

export default Button
