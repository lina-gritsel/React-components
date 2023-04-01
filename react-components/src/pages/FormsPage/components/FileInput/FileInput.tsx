import { FC, useState } from 'react'
import { Control, Controller, FieldErrors } from 'react-hook-form'

import { IErrors } from '../../hooks'

import styles from './FileInput.module.scss'

interface FileInputProps {
  name: string
  control: Control<any>
  label?: string
  errors: FieldErrors<IErrors>
  currentFile: string
  setCurrentFile: (value: string) => void
}

const FileInput: FC<FileInputProps> = ({
  name,
  control,
  errors,
  label,
  currentFile,
  setCurrentFile,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={{
        required: 'Select a file',
      }}
      render={({ field: { onChange } }) => (
        <div className={styles.wrapper}>
          {label && <div className={styles.caption}>{label}</div>}
          <input
            type="file"
            onChange={(e) => {
              setCurrentFile(e.target.value)
              onChange(e.target.files)
            }}
            value={currentFile}
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
