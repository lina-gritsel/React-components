import React from 'react'

import logo from '../../assets/logo.png'

import Menu from '../Menu'

import styles from './Header.module.scss'

class Header extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <img className={styles.logo} src={logo} />
          <Menu />
        </div>
      </div>
    )
  }
}
export default Header
