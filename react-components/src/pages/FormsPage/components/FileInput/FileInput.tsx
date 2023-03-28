import React, { FC } from 'react'

import styles from './FileInput.module.scss'

interface FileInputProps {
  innerRef?: React.RefObject<HTMLInputElement>
}

const FileInput: FC<FileInputProps> = ({ innerRef }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputTitle}>Add image</div>
      <input
        type="file"
        ref={innerRef}
        accept="image/*"
        className={styles.inputFile}
        id="file"
      />
    </div>
  )
}

export default FileInput
