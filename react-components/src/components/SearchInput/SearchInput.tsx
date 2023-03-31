import { FC } from 'react'
import { Search } from '../../assets/icons'

import styles from './SearchBar.module.scss'

interface SearchInputProps {
  onChange: (value: string) => void
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
        onChange={(event) => onChange(event.target.value || '')}
        className={styles.search}
        placeholder={placeholder}
        value={value}
      />
    </div>
  )
}

export default SearchInput
