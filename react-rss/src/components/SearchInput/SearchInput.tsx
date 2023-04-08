import React, { FC } from 'react'
import { Search } from '../../assets/icons'

import styles from './SearchBar.module.scss'

interface SearchInputProps {
  onChange: (value?: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  placeholder?: string
}

const SearchInput: FC<SearchInputProps> = ({
  value,
  placeholder = 'Search',
  onChange,
}) => {
  return (
    <div className={styles.searchWrapper}>
      <Search className={styles.searchIcon} />
      <input
        className={styles.search}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default SearchInput
