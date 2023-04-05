import { FC } from 'react'

import SearchInput from '../../components/SearchInput'
// import mainImage from '../../assets/images/clotes.jpg'
import Layout from '../../components/Layout'

import ModalProductInfo from './components/ModalProductInfo'
import { useHomePage, getInfoproduct } from './hooks'
import CardsList from './components/CardsList'

import styles from './HomePage.module.scss'

const HomePage: FC = () => {
  const { onChangeSearch, filteredProducts, isLoading, searchString } =
    useHomePage()

  const { modalVisible, showInfoProduct, selectCharacter, closeModal } =
    getInfoproduct()

  //! REFACTOR ALL CODE!!!!

  return (
    <div data-testid="homeContainer">
      <Layout>
        {/* <div className={styles.wrapperMain}>
          <div className={styles.shadow}></div>
          <img src={mainImage} className={styles.mainImage}></img>
          <div className={styles.mainTitle}>
            bajor
            <br /> -<br /> choose the best
          </div>
        </div> */}
        <SearchInput
          value={searchString || ''}
          onChange={(event) => onChangeSearch(event?.target.value || '')} //? Remove div wrapper
          data-testid="searchBarInput"
        />
        {!isLoading && (
          <CardsList
            characters={filteredProducts}
            showInfoProduct={showInfoProduct}
          />
        )}
        {isLoading && <>Loading...</>}
      </Layout>
      <ModalProductInfo
        modalVisible={modalVisible}
        selectCharacter={selectCharacter}
        onClose={closeModal}
      />
    </div>
  )
}

export default HomePage
