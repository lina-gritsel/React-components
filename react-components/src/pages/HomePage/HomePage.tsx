import React from 'react'
import Layout from '../../components/Layout'
import CardsList from './components/CardsList'

import styles from './HomePage.module.scss'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
