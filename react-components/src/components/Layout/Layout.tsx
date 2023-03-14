import { FC, ReactNode } from 'react'
import Header from '../Header'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  )
}

export default Layout
