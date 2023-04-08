import React, { FC } from 'react'
import { Control, Controller, FieldErrors } from 'react-hook-form'

import { ICardData, IErrors } from '../../hooks'

import styles from './Checkbox.module.scss'

interface CheckboxProps {
  name: string
  control: Control<ICardData>
  errors: FieldErrors<IErrors>
  label?: string
}

const Checkbox: FC<CheckboxProps> = ({ control, errors, label }) => {
  return (
    <Controller
      name="checkbox"
      control={control}
      rules={{
        required: 'This field is required',
      }}
      render={({ field: { onChange, value } }) => (
        <>
          <div>
            <input
              type="checkbox"
              onChange={onChange}
              value={value}
              checked={!!value}
              className={styles.input}
              data-testid="check"
            />
            {label && <label className={styles.caption}>{label}</label>}
          </div>
          <div className={styles.error}>{errors?.checkbox?.message}</div>
        </>
      )}
    />
  )
}

export default Checkbox
