import React from 'react'
import SearchLogo from '../../../../assets/icons/search.svg'

import styles from './SearchBar.module.scss'

interface SearchBarProps {
  searchValue?: string
  setSearchValue?: (value: string) => void
}
class SearchBar extends React.Component<SearchBarProps> {
  render() {
    return (
      <div className={styles.searchWrapper}>
        <img src={SearchLogo} className={styles.searchIcon} />
        <input
          onChange={(event) => this.props.setSearchValue?.(event.target.value)}
          className={styles.search}
          placeholder="Search"
          value={this.props.searchValue}
        />
      </div>
    )
  }
}

export default SearchBar
