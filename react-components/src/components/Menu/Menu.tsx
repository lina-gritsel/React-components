import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { MENU_ITEM } from './constants'

const Menu: FC = () => {
  return (
    <div>
      {MENU_ITEM.map(({ label, to }, index) => (
        <NavLink key={index} to={to}>
          {label}
        </NavLink>
      ))}
    </div>
  )
}

export default Menu
