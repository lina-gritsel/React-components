import React, { FC } from 'react'

import styles from './InputBirth.module.scss'

interface InputBirthProps {
  forwardedRef?: React.RefObject<HTMLInputElement>
}

const InputBirth: FC<InputBirthProps> = ({ forwardedRef }) => {
  return (
    <div className={styles.formItem}>
      <div className={styles.headerInput}>date of birth:</div>
      <input type="date" className={styles.input} ref={forwardedRef} />
    </div>
  )
}

export default InputBirth
