import { FC } from 'react'
import { Control, Controller, FieldErrors } from 'react-hook-form'

import { IErors } from '../../../types'

import styles from './FileInput.module.scss'

interface FileInputProps {
  name: string
  control: Control<any>
  label?: string
  errors: FieldErrors<IErors>
}

const FileInput: FC<FileInputProps> = ({ name, control, errors, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: 'Select a file',
      }}
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
          <div className={styles.error}>{errors.file?.message}</div>
        </div>
      )}
    />
  )
}

export default FileInput
