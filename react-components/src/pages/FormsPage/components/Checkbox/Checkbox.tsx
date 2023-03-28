import React, { FC } from 'react'

import styles from './Checkbox.module.scss'

interface CheckboxProps {
  forwardedRef?: React.RefObject<HTMLInputElement>
}

const Checkbox: FC<CheckboxProps> = ({ forwardedRef }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          ref={forwardedRef}
          className={styles.input}
          data-testid="check"
        />
        <span className={styles.headerInput}>
          Consent to the data processing
        </span>
      </label>
    </div>
  )
}

export default Checkbox
