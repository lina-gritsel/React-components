import { FC, ReactNode } from 'react'
import Header from '../Header'

import styles from './Layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = (props) => {
  return (
    <>
      <Header />
      <div className={styles.content}>{props.children}</div>
    </>
  )
}

export default Layout
