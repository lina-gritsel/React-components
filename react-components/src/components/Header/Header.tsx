import { FC } from 'react'
import Menu from '../Menu'
import logo from '../../assets/logo.png'

import styles from './Header.module.scss'

const Header: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <img className={styles.logo} src={logo} />
        <Menu />
        <input className={styles.search} placeholder="Search" />
      </div>
    </div>
  )
}

export default Header
