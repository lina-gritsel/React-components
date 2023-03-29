import { IErors } from '../../../types'
import { FC } from 'react'
import { Control, Controller, FieldErrors } from 'react-hook-form'

import styles from './Input.module.scss'

interface InputProps {
  name: string
  type: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  placeholder: string
  errors?: FieldErrors<IErors>
}

const Input: FC<InputProps> = ({ type, name, control, placeholder }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <div className={styles.formItem}>
          <div className={styles.headerInput}>name:</div>
          <input
            type={type}
            value={value ?? ''}
            className={styles.input}
            placeholder={placeholder}
            onChange={onChange}
          />
        </div>
      )}
    />
  )
}

export default Input
