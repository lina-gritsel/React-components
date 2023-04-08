import React from 'react'

import styles from './FileInput.module.scss'

interface FileInputProps {
  forwardedRef?: React.RefObject<HTMLInputElement>
}

class FileInput extends React.Component<FileInputProps, {}> {
  listenerSelectedFile = () => {}
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.inputTitle}>Add image</div>
        <input
          type="file"
          ref={this.props.forwardedRef}
          accept="image/*"
          className={styles.inputFile}
          id="file"
        />
      </div>
    )
  }
}

export default FileInput
