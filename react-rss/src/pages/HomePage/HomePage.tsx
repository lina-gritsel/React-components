import { FC } from 'react'

import SearchInput from '../../components/SearchInput'
import mainImage from '../../assets/images/clotes.jpg'
import Layout from '../../components/Layout'

import ModalProductInfo from './components/ModalProductInfo'
import { useHomePage, getInfoproduct } from './hooks'
import CardsList from './components/CardsList'

import styles from './HomePage.module.scss'

const HomePage: FC = () => {
  const { onChangeSearch, filteredProducts, isLoading, searchString } =
    useHomePage()

  const { modalIsOpen, showInfoProduct, selectCharacter, setModalIsOpen } =
    getInfoproduct()
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
        <div>
          <div className={styles.searchBar}>
            <SearchInput
              value={searchString || ''}
              onChange={(event) => onChangeSearch(event?.target.value || '')}
              data-testid="searchBarInput"
            />
          </div>
          {!isLoading && (
            <CardsList
              characters={filteredProducts}
              showInfoProduct={showInfoProduct}
            />
          )}
          {isLoading && <>Loading...</>}
        </div>
      </Layout>
      <ModalProductInfo
        modalIsOpen={modalIsOpen}
        selectCharacter={selectCharacter}
        setModalIsOpen={setModalIsOpen}
      />
      <div className={modalIsOpen ? styles.overlay : ''}></div>
    </div>
  )
}

export default HomePage
