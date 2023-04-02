import { FC } from 'react'
import { Control, Controller } from 'react-hook-form'

import { ICardData } from '../../hooks'
import { RadioButton } from './RadioButton'

import styles from './RadioGroup.module.scss'

type FormValues = {
  name: string
}

export interface RBOption {
  label: string
  value: string
}

interface RadioGroupProps {
  name: string
  control: Control<ICardData, FormValues>
  options: RBOption[]
  label?: string
}

const RadioGroup: FC<RadioGroupProps> = ({ control, options, label }) => {
  return (
    <Controller
      name='radio'
      control={control}
      defaultValue={options[0].value}
      render={({ field: { onChange, value } }) => (
        <>
          {label && <div className={styles.caption}>{label}</div>}
          <div className={styles.radioGroup}>
            {options.map((option) => (
              <RadioButton
                key={option.value}
                onChange={onChange}
                value={option.value}
                currentValue={value}
                label={option.label}
              />
            ))}
          </div>
        </>
      )}
    />
  )
}

export default RadioGroup
