import React, { FC } from 'react'

import Layout from '../../components/Layout'
import CardsList from '../../components/CardsList'
import SearchBar from '../../components/SearchBar'
import { useHomePage } from './hooks'

import styles from './HomePage.module.scss'

const HomePage: FC = () => {
  const { search, setSearch } = useHomePage()

  return (
    <div data-testid="homeContainer">
      <Layout currentPage="Home">
        <div className={styles.searchBar}>
          <SearchBar
            searchValue={search}
            setSearch={setSearch}
            data-testid="searchBarInput"
          />
        </div>
        <CardsList searchValue={search} />
      </Layout>
    </div>
  )
}

export default HomePage
