import { FC } from 'react'

import Menu from '../Menu'

import styles from './Header.module.scss'

const Header: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>r&m</div>
        <Menu />
      </div>
    </div>
  )
}
export default Header
