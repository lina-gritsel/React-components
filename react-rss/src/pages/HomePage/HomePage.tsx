import { FC } from 'react'

import SearchInput from '../../components/SearchInput'
import ModalProductInfo from '../../components/Modal'
import Layout from '../../components/Layout'

import { useHomePage, getInfoCharacter } from './hooks'
import CardsList from './components/CardsList'

import styles from './HomePage.module.scss'
import Label from '../../assets/images/R&M.png'

const HomePage: FC = () => {
  const { searchString, onChangeSearch, isLoading, сharacters, onSubmit } =
    useHomePage()

  const { modalVisible, showInfoProduct, selectCharacter, closeModal } =
    getInfoCharacter()

  return (
    <div data-testid="homeContainer">
      <Layout>
        <div className={styles.main}>
          <img src={Label} className={styles.label} />
        </div>
        <div className={styles.content}>
          <SearchInput
            value={searchString || ''}
            onChange={(event) => onChangeSearch(event?.target.value || '')}
            name="search"
            onSubmit={onSubmit}
            data-testid="searchBarInput"
          />
          {!isLoading && (
            <CardsList
              characters={сharacters}
              showInfoProduct={showInfoProduct}
            />
          )}
          {isLoading && <>Loading...</>}
        </div>
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
