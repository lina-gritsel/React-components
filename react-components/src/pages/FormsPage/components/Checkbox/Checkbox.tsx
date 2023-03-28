import React, { FC } from 'react'

import styles from './Checkbox.module.scss'

interface CheckboxProps {
  innerRef?: React.RefObject<HTMLInputElement>
}

const Checkbox: FC<CheckboxProps> = ({ innerRef }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          ref={innerRef}
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
