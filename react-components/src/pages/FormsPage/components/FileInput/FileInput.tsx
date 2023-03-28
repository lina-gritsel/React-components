import React, { FC } from 'react'

import styles from './FileInput.module.scss'

interface FileInputProps {
  forwardedRef?: React.RefObject<HTMLInputElement>
}

const FileInput: FC<FileInputProps> = ({ forwardedRef }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputTitle}>Add image</div>
      <input
        type="file"
        ref={forwardedRef}
        accept="image/*"
        className={styles.inputFile}
        id="file"
      />
    </div>
  )
}

export default FileInput
