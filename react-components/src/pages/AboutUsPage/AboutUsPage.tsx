import { FC } from 'react'
import Layout from '../../components/Layout'

import styles from './AboutUsPage.module.scss'

const AboutUsPage: FC = () => {
  return (
    <div>
      <Layout currentPage="About">
        <div className={styles.content}>About Us Page</div>
      </Layout>
    </div>
  )
}

export default AboutUsPage
