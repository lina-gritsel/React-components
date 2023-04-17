import { FC } from 'react'

import mainCaption from '@/assets/images/R&M.png'

import styles from './MainOverlay.module.scss'

const MainOverlay: FC = () => {
  return (
    <div className={styles.main}>
      <img src={mainCaption} className={styles.label} />
    </div>
  )
}

export default MainOverlay
