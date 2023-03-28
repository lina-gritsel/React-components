import React, { FC } from 'react'

import styles from './InputCategory.module.scss'

interface InputCategoryProps {
  innerRef?: React.RefObject<HTMLSelectElement>
}

const InputCategory: FC<InputCategoryProps> = ({ innerRef }) => {
  return (
    <div>
      <div className={styles.headerInput}>What do you want to order?</div>
      <select ref={innerRef} className={styles.input}>
        <option className={styles.option} value="" data-testid="select-option">
          Category:
        </option>
        <option
          className={styles.option}
          value="Clothes"
          data-testid="select-option"
        >
          Clothes
        </option>
        <option
          className={styles.option}
          value="Decorations"
          data-testid="select-option"
        >
          Decorations
        </option>
        <option
          className={styles.option}
          value="Technique"
          data-testid="select-option"
        >
          Technique
        </option>
        <option
          className={styles.option}
          value="Bags"
          data-testid="select-option"
        >
          Bags
        </option>
      </select>
    </div>
  )
}

export default InputCategory
