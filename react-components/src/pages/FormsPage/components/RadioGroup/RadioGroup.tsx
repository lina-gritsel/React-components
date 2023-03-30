import { FC } from 'react'
import { Control, Controller } from 'react-hook-form'
import { RadioButton } from './RadioButton'

import styles from './RadioGroup.module.scss'

export interface RBOption {
  label: string
  value: string
}

interface RadioGroupProps {
  name: string
  control: Control<any>
  options: RBOption[]
  label?: string
}

const RadioGroup: FC<RadioGroupProps> = ({
  name,
  control,
  options,
  label,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={options[0].value}
      render={({ field: { onChange, value } }) => (
        <>
          {label && <div className={styles.caption}>{label}</div>}
          {options.map((option) => (
            <RadioButton
              key={option.value}
              onChange={onChange}
              value={option.value}
              currentValue={value}
              label={option.label}
            />
          ))}
        </>
      )}
    />
  )
}

export default RadioGroup
