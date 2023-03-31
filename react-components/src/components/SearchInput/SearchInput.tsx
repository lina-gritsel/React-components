import { FC } from 'react'
import { Search } from '../../assets/icons'

import styles from './SearchBar.module.scss'

interface SearchInputProps {
  onChange: (value?: any) => void
  value: string
  placeholder?: string
}

const SearchInput: FC<SearchInputProps> = ({
  onChange,
  value,
  placeholder = 'Search',
}) => {
  return (
    <div className={styles.searchWrapper}>
      <Search className={styles.searchIcon} />
      <input
        onChange={onChange}
        className={styles.search}
        placeholder={placeholder}
        value={value}
      />
    </div>
  )
}

export default SearchInput
