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
          <option value="grapefruit">Грейпфрут</option>
          <option value="lime">Лайм</option>
          <option value="coconut">Кокос</option>
          <option value="mango">Манго</option>
        </select>
      </div>
    )
  }
}

export default InputSelect
