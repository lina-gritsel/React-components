import { FC, useRef } from 'react'

import closeIcon from '@/assets/images/close.png'
import { Character } from '@/api'

import { useClickOutside } from '../../hooks'

import styles from './Modal.module.scss'

interface ModalProps {
  modalVisible: boolean
  character?: Character | null
  onClose: () => void
}

const Modal: FC<ModalProps> = ({ modalVisible, character, onClose }) => {
  const ref = useRef(null)
  useClickOutside(ref, onClose)

  return (
    <>
      <div
        ref={ref}
        className={modalVisible ? styles.container : styles.hidden}
      >
        <img className={styles.image} src={character?.image} role='image' />
        <div className={styles.info}>
          <RowValues label="name" value={character?.name} />
          <RowValues label="species" value={character?.species} />
          <RowValues label="gender" value={character?.gender} />
          <RowValues label="status" value={character?.status} />
          <img onClick={onClose} src={closeIcon} className={styles.close} />
        </div>
      </div>
      <div className={modalVisible ? styles.overlay : ''}></div>
    </>
  )
}

export default Modal

const RowValues = ({ label, value }: { label: string; value?: string }) => (
  <div className={styles.values}>
    <span>{label}:</span> {value}
  </div>
)
