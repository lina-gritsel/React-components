import React, { FC, useState } from 'react'

import styles from './Switcher.module.scss'

interface SwitcherProps {
  leftLabel?: string
  rightLabel?: string
  innerRef?: React.RefObject<HTMLInputElement>
}

const Switcher: FC<SwitcherProps> = ({ leftLabel, rightLabel, innerRef }) => {
  const [toggle, setToggle] = useState<boolean>(true)

  const toggleState = () => {
    setToggle((prev) => !prev)
  }

  return (
    <div>
      <div className={styles.switchTitle}>
        Do you want to receive notifications from us?
      </div>
      <input
        type="radio"
        id="switchLeft"
        name="switchToggle"
        value={leftLabel}
        onChange={toggleState}
        checked={toggle}
        className={styles.input}
        ref={innerRef}
      />
      <label className={styles.valueInput} htmlFor="switchLeft">
        {leftLabel}
      </label>
      <input
        type="radio"
        id="switchRight"
        name="switchToggle"
        value={rightLabel}
        onChange={toggleState}
        checked={toggle}
        className={styles.input}
      />
      <label className={styles.valueInput} htmlFor="switchRight">
        {rightLabel}
      </label>
    </div>
  )
}

export default Switcher
