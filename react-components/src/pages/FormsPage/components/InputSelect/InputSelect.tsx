import { FC } from 'react'
import { Control, Controller, FieldErrors } from 'react-hook-form'

import { IErrors } from '../../../types'

import styles from './InputSelect.module.scss'

interface RBOption {
  label: string
  value: string
}

interface InputSelectProps {
  name: string
  control: Control<any>
  errors: FieldErrors<IErrors>
  options: RBOption[]
  label?: string
}

const InputSelect: FC<InputSelectProps> = ({
  name,
  control,
  options,
  label,
  errors,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: 'This field is required',
      }}
      render={({ field: { onChange, value } }) => (
        <>
          {label && <div className={styles.caption}>{label}</div>}
          <select className={styles.input} value={value} onChange={onChange}>
            {options.map(({ value, label }) => (
              <option
                key={value}
                className={styles.option}
                value={value}
                data-testid="select-option"
              >
                {label}
              </option>
            ))}
          </select>
          <div className={styles.error}>{errors?.category?.message}</div>
        </>
      )}
    />
  )
}

export default InputSelect
