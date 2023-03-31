import { FC } from 'react'

import Layout from '../../components/Layout'
import CardsList from '../../components/CardsList'
import SearchInput from '../../components/SearchInput'
import { useHomePage } from './hooks'

import styles from './HomePage.module.scss'

const HomePage: FC = () => {
  const { searchString, setSearchString, filteredProducts, isLoading } =
    useHomePage()

  return (
    <div data-testid="homeContainer">
      <Layout currentPage="Home">
        <div className={styles.searchBar}>
          <SearchInput
            value={searchString}
            onChange={(event) => setSearchString(event.target.value || '')}
            data-testid="searchBarInput"
          />
        </div>
        {!isLoading && <CardsList products={filteredProducts} />}
        {isLoading && <>Loading...</>}
      </Layout>
    </div>
  )
}

export default HomePage
