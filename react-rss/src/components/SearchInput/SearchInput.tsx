import React, { FC } from 'react'

import { Search } from '../../assets/icons'
import { submitByKeyDown } from '../../hooks'

import styles from './SearchInput.module.scss'

interface SearchInputProps {
  onChange: (value?: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  placeholder?: string
  setCharacters: (value: []) => void
  onKeyDown?: (value?: React.KeyboardEvent<HTMLInputElement>) => void
}

const SearchInput: FC<SearchInputProps> = ({
  onChange,
  value,
  placeholder = 'Search',
  setCharacters,
}) => {
  return (
    <div className={styles.searchWrapper}>
      {/* <Search className={styles.searchIcon} /> */}
      <input
        onChange={onChange}
        className={styles.search}
        placeholder={placeholder}
        value={value}
        onKeyDown={submitByKeyDown(setCharacters)}
      />
    </div>
  )
}

export default SearchInput
