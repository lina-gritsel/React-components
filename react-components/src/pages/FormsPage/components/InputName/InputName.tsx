import React, { FC } from 'react'

import styles from './InputName.module.scss'

interface InputNameProps {
  innerRef?: React.RefObject<HTMLInputElement>
}

const InputName: FC<InputNameProps> = ({ innerRef }) => {
  return (
    <div className={styles.formItem}>
      <div className={styles.headerInput}>name:</div>
      <input ref={innerRef} className={styles.input} />
    </div>
  )
}

export default InputName
