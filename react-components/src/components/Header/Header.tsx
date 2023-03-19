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
          <div className={styles.currentPageWrapper}>
            <div className={styles.title}> Current Page:</div>
            <div className={styles.currentPage}>{this.props.currentPage}</div>
          </div>
          <Menu />
        </div>
      </div>
    )
  }
}
export default Header
