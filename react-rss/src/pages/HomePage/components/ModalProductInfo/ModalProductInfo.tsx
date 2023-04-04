import { FC } from 'react'

import { Сharacter } from '../../../../api'

import styles from './ModalProductInfo.module.scss'

interface ModalProductInfoProps {
  modalIsOpen: boolean
  selectCharacter: Сharacter | null
}

const ModalProductInfo: FC<ModalProductInfoProps> = ({
  modalIsOpen,
  selectCharacter,
}) => {
  return (
    <div className={modalIsOpen ? styles.container : styles.hidden}>
      <img className={styles.image} src={selectCharacter?.image}></img>
      <div className={styles.name}> name:{selectCharacter?.name}</div>
      <div className={styles.species}>species:{selectCharacter?.species}</div>
      <div className={styles.gender}>gender:{selectCharacter?.gender}</div>
      <div className={styles.status}>status:{selectCharacter?.status}</div>
    </div>
  )
}

export default ModalProductInfo
