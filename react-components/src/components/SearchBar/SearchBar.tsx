import { FC } from 'react'
import SearchLogo from '../../assets/icons/search.svg'

import styles from './SearchBar.module.scss'

interface SearchBarProps {
  searchValue?: string
  setSearchValue?: (value: string) => void
}

const SearchBar: FC<SearchBarProps> = ({ searchValue, setSearchValue }) => {
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
