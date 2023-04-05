import React, { FC } from 'react'
import { Search } from '../../assets/icons'

import styles from './SearchInput.module.scss'

interface SearchInputProps {
  onChange: (value?: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  placeholder?: string
  onClick: (value: string) => void
}

const SearchInput: FC<SearchInputProps> = ({
  onChange,
  value,
  placeholder = 'Search',
  onClick,
}) => {
  return (
    <div className={styles.searchWrapper}>
      {/* <Search className={styles.searchIcon} /> */}
      <input
        onChange={onChange}
        className={styles.search}
        placeholder={placeholder}
        value={value}
      />
      <button className={styles.searchButton} onClick={() => onClick(value)}>
        Find
      </button>
    </div>
  )
}

export default SearchInput
