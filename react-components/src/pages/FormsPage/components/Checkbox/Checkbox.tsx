import React from 'react'

import styles from './Checkbox.module.scss'

interface InputBirthProps {
  forwardedRef: React.RefObject<HTMLInputElement>
}

class Checkbox extends React.Component<InputBirthProps, {}> {
  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            ref={this.props.forwardedRef}
            className={styles.input}
          />
          <span className={styles.headerInput}>
            Consent to the data processing
          </span>
        </label>
      </div>
    )
  }
}

export default Checkbox
