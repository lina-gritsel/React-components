import React from 'react'

import styles from './InputCategory.module.scss'

interface InputCategoryProps {
  forwardedRef: React.RefObject<HTMLSelectElement>
}

class InputCategory extends React.Component<InputCategoryProps, {}> {
  render() {
    return (
      <div>
        <div className={styles.headerInput}>What do you want to order?</div>
        <select ref={this.props.forwardedRef} className={styles.input}>
          <option value="Clothes">Clothes</option>
          <option value="Decorations">Decorations</option>
          <option value="Technique">Technique</option>
          <option value="Bags">Bags</option>
        </select>
      </div>
    )
  }
}

export default InputCategory
