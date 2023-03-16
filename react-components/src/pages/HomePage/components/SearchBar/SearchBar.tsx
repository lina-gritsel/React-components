import React from 'react'

import styles from './SearchBar.module.scss'

interface SearchBarProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onInputChange: (value: any) => void
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
class SearchBar extends React.Component<SearchBarProps, any> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  InputChange = (event: any) => {
    this.props.onInputChange(event)
  }

  render() {
    return (
      <>
        <label>Search</label>
        <input
          onChange={(event) => this.InputChange(event)}
          className={styles.search}
          // value={this.props.search}
        />
      </>
    )
  }
}

export default SearchBar
