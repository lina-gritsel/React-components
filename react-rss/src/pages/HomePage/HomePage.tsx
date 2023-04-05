import { FC } from 'react'

import SearchInput from '../../components/SearchInput'
import Layout from '../../components/Layout'

import ModalProductInfo from '../../components/Modal'
import { useHomePage, getInfoproduct } from './hooks'
import CardsList from './components/CardsList'

import styles from './HomePage.module.scss'

const HomePage: FC = () => {
  const { onChangeSearch, filteredProducts, isLoading, searchString } =
    useHomePage()

  const { modalVisible, showInfoProduct, selectCharacter, closeModal } =
    getInfoproduct()

  return (
    <div data-testid="homeContainer">
      <Layout>
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
