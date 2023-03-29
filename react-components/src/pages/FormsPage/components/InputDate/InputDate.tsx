import { IErors } from '../../../types'
import React, { FC } from 'react'
import { Control, Controller, FieldErrors } from 'react-hook-form'

import styles from './InputDate.module.scss'

interface InputDateProps {
  name: string
  type: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  errors?: FieldErrors<IErors>
}

const InputDate: FC<InputDateProps> = ({ type, name, control, errors }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <div className={styles.formItem}>
          <div className={styles.headerInput}>date of birth:</div>
          <input
            type={type}
            value={value ?? ''}
            onChange={onChange}
            className={styles.input}
          />
        </div>
      )}
    />
  )
}

export default InputDate
