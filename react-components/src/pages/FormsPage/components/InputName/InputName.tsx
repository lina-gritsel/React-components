import React from 'react'

import styles from './InputName.module.scss'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
class InputName extends React.Component<any, any> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props)
    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event?.target.value })
  }

  render() {
    return (
      <div className={styles.formItem}>
        <div className={styles.headerInput}>name:</div>
        <input
          value={this.state.value}
          onChange={this.handleChange}
          className={styles.input}
        />
      </div>
    )
  }
}

export default InputName
