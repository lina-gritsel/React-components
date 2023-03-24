import React from 'react'

interface SwitcherValue {
  toggle: boolean
}

interface SwitcherProps {
  leftLabel: string
  rightLabel: string
  forwardedRefPos: React.RefObject<HTMLInputElement>
  forwardedRefNeg: React.RefObject<HTMLInputElement>
}

import styles from './Switcher.module.scss'

class Switcher extends React.Component<SwitcherProps, SwitcherValue> {
  constructor(props: SwitcherProps) {
    super(props)
    this.state = {
      toggle: false,
    }

    this.toggleState = this.toggleState.bind(this)
  }

  toggleState() {
    this.setState({
      toggle: !this.state.toggle,
    })
  }

  render() {
    return (
      <div>
        <div className={styles.switchTitle}>
          Do you want to receive notifications from us?
        </div>
        <input
          type="radio"
          id="switchLeft"
          name="switchToggle"
          value={this.props.leftLabel}
          onChange={this.toggleState}
          checked={!this.state.toggle}
          className={styles.input}
          ref={this.props.forwardedRefPos}
        />
        <label className={styles.valueInput} htmlFor="switchLeft">
          {this.props.leftLabel}
        </label>
        <input
          type="radio"
          id="switchRight"
          name="switchToggle"
          value={this.props.rightLabel}
          onChange={this.toggleState}
          checked={this.state.toggle}
          className={styles.input}
          ref={this.props.forwardedRefNeg}
        />
        <label className={styles.valueInput} htmlFor="switchRight">
          {this.props.rightLabel}
        </label>
      </div>
    )
  }
}

export default Switcher
