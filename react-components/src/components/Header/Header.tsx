import { FC } from 'react'
import Menu from '../Menu'

import styles from './Header.module.scss'

const Header: FC = () => {
  return (
    <div className={styles.container}>
      <Menu />
    </div>
  )
}

export default Header
