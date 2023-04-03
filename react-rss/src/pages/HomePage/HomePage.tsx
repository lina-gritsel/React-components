import { FC } from 'react'

import Layout from '../../components/Layout'
import CardsList from './components/CardsList'
import SearchInput from '../../components/SearchInput'
import { useHomePage } from './hooks'

import mainImage from '../../assets/images/clotes.jpg'

import styles from './HomePage.module.scss'

const HomePage: FC = () => {
  const { onChangeSearch, filteredProducts, isLoading, searchString } =
    useHomePage()

  return (
    <div data-testid="homeContainer">
      <Layout>
        <div className={styles.wrapperMain}>
          <div className={styles.shadow}></div>
          <img src={mainImage} className={styles.mainImage}></img>
          <div className={styles.mainTitle}>
            bajor
            <br /> -<br /> choose the best
          </div>
        </div>
        <div className={styles.searchBar}>
          <SearchInput
            value={searchString || ''}
            onChange={(event) => onChangeSearch(event?.target.value || '')}
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
