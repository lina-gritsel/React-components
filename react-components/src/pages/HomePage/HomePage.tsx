import { FC } from 'react'

import Layout from '../../components/Layout'
import CardsList from '../../components/CardsList'
import SearchInput from '../../components/SearchInput'
import { useHomePage } from './hooks'

import styles from './HomePage.module.scss'

const HomePage: FC = () => {
  const { search, setSearch } = useHomePage()

  return (
    <div data-testid="homeContainer">
      <Layout currentPage="Home">
        <div className={styles.searchBar}>
          <SearchInput
            value={search}
            onChange={setSearch}
            data-testid="searchBarInput"
          />
        </div>
        <CardsList searchValue={search} />
      </Layout>
    </div>
  )
}

export default HomePage
