import { FC, ReactNode } from 'react'
import Header from '../Header'

import styles from './Layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <div className={styles.content}>{children}</div>
  </>
)

export default Layout
