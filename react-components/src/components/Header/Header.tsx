import { FC } from 'react'
import Menu from '../Menu'
import logo from '../../assets/logo.png'

import styles from './Header.module.scss'

const Header: FC = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} />
      <Menu />
    </div>
  )
}

export default Header
