import { FC, ReactNode } from 'react'
import Header from '../Header'

import styles from './Layout.module.scss'

interface LayoutProps {
  children: ReactNode
  currentPage: string
}

const Layout: FC<LayoutProps> = (props) => {
  return (
    <>
      <Header currentPage={props.currentPage} />
      <div className={styles.content}>{props.children}</div>
    </>
  )
}

export default Layout
