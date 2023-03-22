import React from 'react'

import styles from './InputBirth.module.scss'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
class InputBirth extends React.Component<any, any> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props)
    this.state = {
      date: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ date: event?.target.value })
  }

  render() {
    return (
      <div className={styles.formItem}>
        <div className={styles.headerInput}>date of birth:</div>
        <input
          type="date"
          onChange={this.handleChange}
          className={styles.input}
        />
      </div>
    )
  }
}

export default InputBirth
