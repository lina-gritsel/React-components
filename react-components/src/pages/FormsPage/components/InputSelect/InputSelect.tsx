import { FC } from 'react'
import { Control, Controller, FieldErrors } from 'react-hook-form'

import { IErors } from '../../../types'

import styles from './InputSelect.module.scss'

interface Options {
  label: string
  value: string
}

interface InputSelectProps {
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  errors: FieldErrors<IErors>
  options: Options[]
  label?: string
}

const InputSelect: FC<InputSelectProps> = ({
  name,
  control,
  options,
  label,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <>
          {label && <div className={styles.caption}>{label}</div>}
          <select className={styles.input} value={value} onChange={onChange}>
            {options.map(({ value, label }, index) => (
              <option
                key={index}
                className={styles.option}
                value={value}
                data-testid="select-option"
              >
                {label}
              </option>
            ))}
          </select>
        </>
      )}
    />
  )
}

export default InputSelect
