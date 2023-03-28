import React, { FC } from 'react'

import styles from './InputName.module.scss'

interface InputNameProps {
  forwardedRef?: React.RefObject<HTMLInputElement>
}

const InputName: FC<InputNameProps> = ({ forwardedRef }) => {
  return (
    <div className={styles.formItem}>
      <div className={styles.headerInput}>name:</div>
      <input ref={forwardedRef} className={styles.input} />
    </div>
  )
}

export default InputName
