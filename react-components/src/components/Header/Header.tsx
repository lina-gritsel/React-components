import { FC } from 'react'

import Menu from '../Menu'

import styles from './Header.module.scss'

const Header: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.logo}>bajor</div>
        <Menu />
      </div>
    </div>
  )
}
export default Header
