import { FC } from 'react'
import { Control, Controller, FieldErrors } from 'react-hook-form'

import { IErors } from '../../../types'

import styles from './InputDate.module.scss'

interface InputDateProps {
  name: string
  control: Control<any>
  errors?: FieldErrors<IErors>
  label?: string
}

const InputDate: FC<InputDateProps> = ({ name, control, errors, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <div className={styles.formItem}>
          {label && <div className={styles.caption}>{label}</div>}
          <input
            type="date"
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
