import React from 'react'

import styles from './InputName.module.scss'

interface InputNameProps {
  forwardedRef: React.RefObject<HTMLInputElement>
}

class InputName extends React.Component<InputNameProps, {}> {
  render() {
    return (
      <div className={styles.formItem}>
        <div className={styles.headerInput}>name:</div>
        <input ref={this.props.forwardedRef} className={styles.input} />
      </div>
    )
  }
}

export default InputName
