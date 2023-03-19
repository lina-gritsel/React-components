import React from 'react'

import logo from '../../assets/logo.png'

import Menu from '../Menu'

import styles from './Header.module.scss'

interface HeaderProps {
  currentPage: string
}

class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <img className={styles.logo} src={logo} />
          <div>Current Page:{this.props.currentPage}</div>
          <Menu />
        </div>
      </div>
    )
  }
}
export default Header
