import React, { FC } from 'react'
import { Control, Controller } from 'react-hook-form'

import styles from './Checkbox.module.scss'

interface CheckboxProps {
  name: string
  control: Control<any>
  label?: string
}

const Checkbox: FC<CheckboxProps> = ({ name, control, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <div>
          <input
            type="checkbox"
            onChange={onChange}
            value={value}
            className={styles.input}
            data-testid="check"
          />
          {label && <label className={styles.caption}>{label}</label>}
        </div>
      )}
    />
  )
}

export default Checkbox
