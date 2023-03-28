import React from 'react'
import Layout from '../../components/Layout'
import CardsList from '../../components/CardsList'
import SearchBar from '../../components/SearchBar'

import styles from './HomePage.module.scss'

interface HomeState {
  search: string
}
class HomePage extends React.Component {
  state: HomeState = {
    search: '',
  }
  beforeUnloadListener = () => {
    localStorage.setItem('searchValue', this.state.search)
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.beforeUnloadListener)
    const currentSearchValue = localStorage.getItem('searchValue')
    if (currentSearchValue) {
      this.setState({ search: currentSearchValue })
    }
  }

  componentWillUnmount(): void {
    window.removeEventListener('beforeunload', this.beforeUnloadListener)
    localStorage.setItem('searchValue', this.state.search)
  }

  setSearchValue = (value: string) => {
    this.setState({ search: value })
    localStorage.setItem('searchValue', value)
  }

  render() {
    return (
      <div data-testid="homeContainer">
        <Layout currentPage="Home">
          <div className={styles.searchBar}>
            <SearchBar
              searchValue={this.state.search}
              setSearchValue={this.setSearchValue}
              data-testid="searchBarInput"
            />
          </div>
          <CardsList searchValue={this.state.search} />
        </Layout>
      </div>
    )
  }
}

export default HomePage
