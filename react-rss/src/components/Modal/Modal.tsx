import { FC } from 'react'

import styles from './Modal.module.scss'

interface ModalProps {
  showModal: boolean
  className?: string
}

const Modal: FC<ModalProps> = ({ showModal }) => {
  return (
    <div className={showModal ? styles.showModal : styles.hideModal}>
      Card
      <br /> is <br />
      created
    </div>
  )
}

export default Modal
