import React from 'react'
import Layout from '../../components/Layout'

import styles from './HomePage.module.scss'

interface Rating {
  rate: number
  count: number
}
interface Product {
  title: string
  price: number
  description: string
  category: string
  image: string
  id: number
  rating: Rating
}

interface ResponseProducts {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any
  isLoaded: boolean
  items: Product[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
class HomePage extends React.Component<any, ResponseProducts> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    }
  }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then((respo) => {
        return respo.json()
      })
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          })
          console.log(result)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          })
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <Layout>
            <div>HomePage</div>
            <div>
              {items.map(({ title, price, image }, index) => (
                <div key={index}>
                  <div>{title}</div>
                  <div>{price}</div>
                  <img className={styles.imageProduct} src={image} />
                </div>
              ))}
            </div>
          </Layout>
        </div>
      )
    }
  }
}

export default HomePage
