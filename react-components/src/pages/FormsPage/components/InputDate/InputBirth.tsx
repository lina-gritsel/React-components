import React, { FC } from 'react'

import styles from './InputBirth.module.scss'

interface InputBirthProps {
  innerRef?: React.RefObject<HTMLInputElement>
}

const InputBirth: FC<InputBirthProps> = ({ innerRef }) => {
  return (
    <div className={styles.formItem}>
      <div className={styles.headerInput}>date of birth:</div>
      <input type="date" className={styles.input} ref={innerRef} />
    </div>
  )
}

export default InputBirth
