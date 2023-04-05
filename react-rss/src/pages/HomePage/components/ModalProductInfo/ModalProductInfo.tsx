import { FC, useRef } from 'react'

import closeIcon from '../../../../assets/images/close.png'
import { useClickOutside } from '../../../../hooks'
import { Сharacter } from '../../../../api'

import styles from './ModalProductInfo.module.scss'

interface ModalProductInfoProps {
  modalVisible: boolean
  selectCharacter: Сharacter | null
  onClose: () => void
}

const ModalProductInfo: FC<ModalProductInfoProps> = ({
  modalVisible,
  selectCharacter,
  onClose,
}) => {
  const ref = useRef(null)
  useClickOutside(ref, onClose)

  return (
    <>
      <div ref={ref} className={modalVisible ? styles.container : styles.hidden}>
        <img className={styles.image} src={selectCharacter?.image} />
        <div className={styles.info}>
          <RowValues label="name" value={selectCharacter?.name} />
          <RowValues label="species" value={selectCharacter?.species} />
          <RowValues label="gender" value={selectCharacter?.gender} />
          <RowValues label="status" value={selectCharacter?.status} />
          <img onClick={onClose} src={closeIcon} className={styles.close} />
        </div>
      </div>
      <div className={modalVisible ? styles.overlay : ''}></div>
    </>
  )
}

export default ModalProductInfo

const RowValues = ({ label, value }: { label: string; value?: string }) => (
  <div className={styles.values}>
    <span>{label}:</span> {value}
  </div>
)
