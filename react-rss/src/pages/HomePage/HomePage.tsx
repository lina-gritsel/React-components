import { FC } from 'react'

import SearchInput from '../../components/SearchInput'
import ModalProductInfo from '../../components/Modal'
import Layout from '../../components/Layout'

import { useHomePage, getInfoCharacter } from './hooks'
import CardsList from './components/CardsList'

import styles from './HomePage.module.scss'

const HomePage: FC = () => {
  const { searchString, onChangeSearch, isLoading, сharacters,setCharacters } = useHomePage()

  const { modalVisible, showInfoProduct, selectCharacter, closeModal } =
  getInfoCharacter()

  return (
    <div data-testid="homeContainer">
      <Layout>
        <SearchInput
          value={searchString || ''}
          onChange={(event) => onChangeSearch(event?.target.value || '')}
          data-testid="searchBarInput"
          setCharacters={setCharacters}
        />
        {!isLoading && (
          <CardsList
            characters={сharacters}
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
