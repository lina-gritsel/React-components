import React from 'react'
import Layout from '../../components/Layout'
import CardsList from './components/CardsList'

class HomePage extends React.Component<{}> {
  render() {
    return (
      <div>
        <Layout currentPage="Home">
          <CardsList />
        </Layout>
      </div>
    )
  }
}

export default HomePage
