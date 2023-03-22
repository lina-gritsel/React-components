import React from 'react'

import styles from './Checkbox.module.scss'

interface SelectValue {
  select: boolean
}

class Checkbox extends React.Component<{}, SelectValue> {
  constructor(props: SelectValue) {
    super(props)
    this.state = {
      select: false,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ select: event.target.checked })
  }

  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={this.state.select}
            onChange={this.handleChange}
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
