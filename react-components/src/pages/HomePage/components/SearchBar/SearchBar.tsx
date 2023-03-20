import React from 'react'

import SearchLogo from '../../../../assets/icons/search.svg'

import styles from './SearchBar.module.scss'

interface SearchBarProps {
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value?: string | number
}

class SearchBar extends React.Component<SearchBarProps, {}> {
  InputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onInputChange?.(event)
  }

  render() {
    return (
      <div className={styles.searchWrapper}>
        <img src={SearchLogo} className={styles.searchIcon} />
        <input
          onChange={(event) => this.InputChange(event)}
          className={styles.search}
          placeholder="Search"
          value={this.props.value}
        />
      </div>
    )
  }
}

export default SearchBar
