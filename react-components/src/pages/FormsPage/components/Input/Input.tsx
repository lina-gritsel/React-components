import { FC } from 'react'
import { Control, Controller, FieldErrors } from 'react-hook-form'

import { IErrors } from '../../hooks'

import styles from './Input.module.scss'

interface InputProps {
  name: string
  control: Control<any>
  placeholder: string
  errors?: FieldErrors<IErrors>
  label?: string
}

const Input: FC<InputProps> = ({
  name,
  control,
  placeholder,
  label,
  errors,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: 'This field is required',
        minLength: {
          value: 2,
          message: 'Minimum 2 sumbol',
        },
        pattern: {
          value: /^[a-zA-Z]+$/,
          message: 'Only letters',
        },
      }}
      render={({ field: { value, onChange } }) => (
        <div className={styles.formItem}>
          {label && <div className={styles.caption}>{label}</div>}
          <input
            type="text"
            value={value ?? ''}
            className={styles.input}
            placeholder={placeholder}
            onChange={onChange}
          />
          <div className={styles.error}>{errors?.name?.message}</div>
        </div>
      )}
    />
  )
}

export default Input
