import React, { FC, useState } from 'react'
import { Control, Controller } from 'react-hook-form'

import styles from './RadioButton.module.scss'

export interface RBOption {
  label: string
  value: string
}

interface SwitcherProps {
  name: string
  control: Control<any>
  type: string
  options: RBOption[]
  label?: string
  currentOption: RBOption
  disabled?: boolean
  onOptionChange: (option: RBOption) => void
}

const RadioButoon: FC<SwitcherProps> = ({
  name,
  control,
  type,
  options,
  label,
  currentOption,
  disabled,
  onOptionChange,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={() => (
        <div>
          {label && <div className={styles.switchTitle}>{label}</div>}
          {options.map((option) => {
            const stringValue = option.value.toString()
            return (
              <div key={option.label}>
                <input
                  type={type}
                  id={stringValue}
                  name={stringValue}
                  value={stringValue}
                  checked={option.value === currentOption.value}
                  onChange={() => onOptionChange(option)}
                  className={styles.input}
                  disabled={disabled}
                />
                <label className={styles.valueInput} htmlFor={stringValue}>
                  {option.label}
                </label>
              </div>
            )
          })}
        </div>
      )}
    />
  )
}

export default RadioButoon
