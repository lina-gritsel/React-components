import { FC } from 'react'
import { Control, Controller, FieldErrors } from 'react-hook-form'

import { IErrors } from '../../../types'

import styles from './InputDate.module.scss'

interface InputDateProps {
  name: string
  control: Control<any>
  errors?: FieldErrors<IErrors>
  label?: string
}

const InputDate: FC<InputDateProps> = ({ name, control, errors, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: 'This field is required',
      }}
      render={({ field: { value, onChange } }) => (
        <div className={styles.formItem}>
          {label && <div className={styles.caption}>{label}</div>}
          <input
            type="date"
            value={value ?? ''}
            onChange={onChange}
            className={styles.input}
          />
          <div className={styles.error}>{errors?.date?.message}</div>
        </div>
      )}
    />
  )
}

export default InputDate
