import { FC } from 'react'
import { Control, Controller, FieldErrors } from 'react-hook-form'

import { ICoorectCardData, IErrors } from '../../hooks'

import styles from './InputSelect.module.scss'

interface CategoriesOption {
  label: string
  value: string
}

interface InputSelectProps {
  control: Control<ICoorectCardData>
  errors: FieldErrors<IErrors>
  options: CategoriesOption[]
  label?: string
}

const InputSelect: FC<InputSelectProps> = ({
  control,
  options,
  label,
  errors,
}) => {
  return (
    <Controller
      name="category"
      control={control}
      defaultValue={options[0].label}
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
