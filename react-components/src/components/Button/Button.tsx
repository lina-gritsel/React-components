import React, { ReactNode } from 'react'

import styles from './Button.module.scss'

interface ButtonProps {
  className?: string
  children: ReactNode
  isDisabled?: boolean
  outlined?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'submit'
}

class Button extends React.Component<{}, ButtonProps> {
  render(): React.ReactNode {
    return (
      <button type="submit" className={styles.button}>
        Submit
      </button>
    )
  }
}

export default Button
