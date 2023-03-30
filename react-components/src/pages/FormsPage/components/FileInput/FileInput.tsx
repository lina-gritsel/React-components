import { FC } from 'react'
import { Control, Controller } from 'react-hook-form'

import styles from './FileInput.module.scss'

interface FileInputProps {
  name: string
  control: Control<any>
  label?: string
}

const FileInput: FC<FileInputProps> = ({ name, control, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <div className={styles.wrapper}>
          {label && <div className={styles.caption}>{label}</div>}
          <input
            type="file"
            onChange={onChange}
            value={value}
            className={styles.inputFile}
            accept="image/*"
          />
        </div>
      )}
    />
  )
}

export default FileInput
