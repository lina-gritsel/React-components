import React from 'react'

import styles from './InputCategory.module.scss'

interface InputCategoryProps {
  forwardedRef?: React.RefObject<HTMLSelectElement>
}

class InputCategory extends React.Component<InputCategoryProps, {}> {
  render() {
    return (
      <div>
        <div className={styles.headerInput}>What do you want to order?</div>
        <select ref={this.props.forwardedRef} className={styles.input}>
          <option value="" data-testid="select-option">
            Category:
          </option>
          <option value="Clothes" data-testid="select-option">
            Clothes
          </option>
          <option value="Decorations" data-testid="select-option">
            Decorations
          </option>
          <option value="Technique" data-testid="select-option">
            Technique
          </option>
          <option value="Bags" data-testid="select-option">
            Bags
          </option>
        </select>
      </div>
    )
  }
}

export default InputCategory
