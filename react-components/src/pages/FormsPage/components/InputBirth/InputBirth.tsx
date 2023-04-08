import React from 'react'

import styles from './InputBirth.module.scss'

interface InputBirthProps {
  forwardedRef?: React.RefObject<HTMLInputElement>
}

class InputBirth extends React.Component<InputBirthProps, {}> {
  render() {
    return (
      <div className={styles.formItem}>
        <div className={styles.headerInput}>date of birth:</div>
        <input
          type="date"
          className={styles.input}
          ref={this.props.forwardedRef}
        />
      </div>
    )
  }
}

export default InputBirth
