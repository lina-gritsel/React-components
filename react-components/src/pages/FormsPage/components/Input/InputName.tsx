import { IErors } from 'pages/types'
import { FC } from 'react'
import { Control, Controller, FieldErrors } from 'react-hook-form'

import styles from './InputName.module.scss'

interface InputNameProps {
  name: string
  type: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  placeholder: string
  errors?: FieldErrors<IErors>
}

const InputName: FC<InputNameProps> = ({
  type,
  name,
  control,
  placeholder,
}) => {
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

export default InputName
