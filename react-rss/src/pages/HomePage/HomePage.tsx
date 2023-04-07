import { FC } from 'react'

import SearchInput from '../../components/SearchInput'
import Label from '../../assets/images/R&M.png'
import Loader from '../../components/Loader'
import Layout from '../../components/Layout'
import Modal from '../../components/Modal'

import { useHomePage, useFetchCharacter } from './hooks'
import CardsList from './components/CardsList'

import styles from './HomePage.module.scss'

const HomePage: FC = () => {
  const { searchString, onChangeSearch, isLoading, сharacters, onSubmit } =
    useHomePage()

  const { modalVisible, onCardClick, selectCharacter, closeModal } =
    useFetchCharacter()

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
          <CardsList
            characters={сharacters}
            onCardClick={onCardClick}
            isLoading={isLoading}
          />
        </div>
      </Layout>
      <Modal
        modalVisible={modalVisible}
        character={selectCharacter}
        onClose={closeModal}
      />
    </div>
  )
}

export default HomePage
