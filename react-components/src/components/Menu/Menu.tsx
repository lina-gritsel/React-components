import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { MENU_ITEM } from './constants'

import styles from './Menu.module.scss'

const Menu: FC = () => {
  return (
    <div className={styles.menuContent}>
      {MENU_ITEM.map(({ label, to }, index) => (
        <NavLink key={index} to={to} className={styles.menuItem}>
          {label}
        </NavLink>
      ))}
    </div>
  )
}

export default Menu
