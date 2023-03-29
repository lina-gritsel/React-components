import { FC, MutableRefObject } from 'react'
import { Control, Controller, FieldErrors } from 'react-hook-form'
import Select from 'react-select'

import { IErors } from '../../../types'
import { OPTIONS_VALUES } from './constants'

import styles from './InputSelect.module.scss'

interface InputSelectProps {
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  errors: FieldErrors<IErors>
  inputRef?: MutableRefObject<HTMLInputElement>
}

const InputSelect: FC<InputSelectProps> = ({ name, control }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        // <>
        //   <div className={styles.headerInput}>What do you want to order?</div>
        //   <Select options={OPTIONS_VALUES} value={value} onChange={onChange} />
        // </>
        <>
          <div className={styles.headerInput}>What do you want to order?</div>
          <select className={styles.input} value={value} onChange={onChange}>
            {OPTIONS_VALUES.map(({ value, label }, index) => (
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
