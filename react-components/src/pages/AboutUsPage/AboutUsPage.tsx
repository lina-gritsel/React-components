import { FC } from 'react'
import Layout from '../../components/Layout'

import styles from './AboutUsPage.module.scss'

const AboutUsPage: FC = () => (
  <div>
    <Layout currentPage="About">
      <div className={styles.content}>About Us Page</div>
    </Layout>
  </div>
)

export default AboutUsPage
