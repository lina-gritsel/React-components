import React from 'react'
import Layout from '../../components/Layout'

import styles from './AboutUsPage.module.scss'

class AboutUsPage extends React.Component {
  render() {
    return (
      <div>
        <Layout currentPage="About">
          <div className={styles.content}>About Us Page</div>
        </Layout>
      </div>
    )
  }
}

export default AboutUsPage
