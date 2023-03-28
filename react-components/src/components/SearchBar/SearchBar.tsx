import { FC } from 'react'
import SearchLogo from '../../assets/icons/search.svg'

import styles from './SearchBar.module.scss'

interface SearchBarProps {
  searchValue?: string
  setSearch: (value: string) => void
}

const SearchBar: FC<SearchBarProps> = ({ searchValue, setSearch }) => {
  const setSearchValue = (value: string) => {
    setSearch(value)
    localStorage.setItem('searchValue', value)
  }

  return (
    <div className={styles.searchWrapper}>
      <img src={SearchLogo} className={styles.searchIcon} />
      <input
        onChange={(event) => setSearchValue?.(event.target.value)}
        className={styles.search}
        placeholder="Search"
        value={searchValue}
      />
    </div>
  )
}

export default SearchBar
