import { FC } from 'react'
import { Control, Controller } from 'react-hook-form'

import styles from './FileInput.module.scss'

interface FileInputProps {
  name: string
  control: Control<any>
  type: string
  label?: string
}

const FileInput: FC<FileInputProps> = ({ name, control, type, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <div className={styles.wrapper}>
          <div className={styles.inputTitle}>{label}</div>
          <input
            type={type}
            onChange={onChange}
            value={value}
            className={styles.inputFile}
            accept="image/*"
            id="file"
          />
        </div>
      )}
    />
  )
}

export default FileInput
