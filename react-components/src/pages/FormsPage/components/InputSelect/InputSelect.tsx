import React from 'react'

import styles from './InputSelect.module.scss'

interface SelectValue {
  value: string
}
class InputSelect extends React.Component<{}, SelectValue> {
  constructor(props: SelectValue) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div>
        <div className={styles.headerInput}>What do you want to order?</div>
        <select
          value={this.state.value}
          onChange={this.handleChange}
          className={styles.input}
        >
          <option value="Clothes">Clothes</option>
          <option value="Decorations">Decorations</option>
          <option value="Technique">Technique</option>
          <option value="Bags">Bags</option>
        </select>
      </div>
    )
  }
}

export default InputSelect
