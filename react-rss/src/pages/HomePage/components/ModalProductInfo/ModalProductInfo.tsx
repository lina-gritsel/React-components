import { FC } from 'react'

import styles from './ModalProductInfo.module.scss'

interface ModalProductInfoProps {
  modalIsOpen: boolean
}

const ModalProductInfo: FC<ModalProductInfoProps> = ({ modalIsOpen }) => {
  return (
    <div className={modalIsOpen ? styles.container : styles.hidden}>
      ModalProductInfo
    </div>
  )
}

export default ModalProductInfo
