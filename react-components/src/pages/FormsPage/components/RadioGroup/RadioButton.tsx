import { FC } from 'react'

import styles from './RadioGroup.module.scss'

interface RadiButtonProps {
  value: string
  label: string
  onChange: () => void
  currentValue: string
}

export const RadioButton: FC<RadiButtonProps> = ({
  value,
  label,
  onChange,
  currentValue,
}) => {
  return (
    <>
      <input
        type="radio"
        id={value}
        value={value}
        checked={currentValue === value}
        onChange={onChange}
        className={styles.input}
      />
      <label className={styles.label} htmlFor={value}>
        {label}
      </label>
    </>
  )
}
