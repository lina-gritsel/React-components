import { FC } from 'react'

import SearchInput from '../../components/SearchInput'
import Layout from '../../components/Layout'
import Modal from '../../components/Modal'

import { useHomePage, useFetchCharacter } from './hooks'
import MainOverlay from './components/MainOverlay'
import CardsList from './components/CardsList'

import styles from './HomePage.module.scss'

const HomePage: FC = () => {
  const {
    searchString,
    onChangeSearch,
    isLoading,
    characters,
    onSubmit,
  } = useHomePage()

  const { modalVisible, onCardClick, selectCharacter, closeModal } =
    useFetchCharacter()

  return (
    <div data-testid="homeContainer">
      <Layout>
        <MainOverlay />
        <div className={styles.content}>
          <SearchInput
            value={searchString || ''}
            onChange={(event) => onChangeSearch(event?.target.value || '')}
            name="search"
            onSubmit={onSubmit}
            data-testid="searchBarInput"
            placeholder="Search by name..."
          />
          <CardsList
            characters={characters}
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
