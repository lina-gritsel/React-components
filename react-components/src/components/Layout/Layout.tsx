import { FC, ReactNode } from 'react'
import Menu from '../Menu'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = (props) => {
  return (
    <>
      <Menu />
      {props.children}
    </>
  )
}

export default Layout
