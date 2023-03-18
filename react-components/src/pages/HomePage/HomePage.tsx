import React from 'react'
import Layout from '../../components/Layout'
import CardsList from './components/CardsList'

import styles from './HomePage.module.scss'

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <CardsList className={styles.cardsList} />
        </Layout>
      </div>
    )
  }
}

export default HomePage
