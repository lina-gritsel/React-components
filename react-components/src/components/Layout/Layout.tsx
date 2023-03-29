import { FC, ReactNode } from 'react'
import Header from '../Header'

import styles from './Layout.module.scss'

interface LayoutProps {
  children: ReactNode
  currentPage: string
}

const Layout: FC<LayoutProps> = ({ currentPage, children }) => (
  <>
    <Header currentPage={currentPage} />
    <div className={styles.content}>{children}</div>
  </>
)

export default Layout
