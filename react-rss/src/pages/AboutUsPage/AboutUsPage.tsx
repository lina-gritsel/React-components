import { FC } from 'react'
import Layout from '@/components/Layout'

import styles from './AboutUsPage.module.scss'

const AboutUsPage: FC = () => (
  <Layout>
    <div className={styles.content} data-cy="aboutPage">About Us Page</div>
  </Layout>
)

export default AboutUsPage
