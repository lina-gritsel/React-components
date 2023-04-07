import { FC } from 'react'

import SearchInput from '../../components/SearchInput'
import Label from '../../assets/images/R&M.png'
import Loader from '../../components/Loader'
import Layout from '../../components/Layout'
import Modal from '../../components/Modal'

import { useHomePage, getInfoCharacter } from './hooks'
import CardsList from './components/CardsList'

import styles from './HomePage.module.scss'

const HomePage: FC = () => {
  const { searchString, onChangeSearch, isLoading, сharacters, onSubmit } =
    useHomePage()

  const { modalVisible, showModal, selectCharacter, closeModal } =
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
            <CardsList characters={сharacters} showModal={showModal} />
          )}
          {isLoading && <Loader className={styles.loader}/>}
        </div>
      </Layout>
      <Modal
        modalVisible={modalVisible}
        selectCharacter={selectCharacter}
        onClose={closeModal}
      />
    </div>
  )
}

export default HomePage
