import React from 'react'
import Card from '../Card/Card'

import styles from './CardsList.module.scss'

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
class CardsList extends React.Component<any, ResponseProducts> {
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
        <div className={styles.cards}>
          {items.map(({ title, price, image, description }, index) => (
            <div key={index}>
              <Card
                title={title}
                price={price}
                image={image}
                desc={description}
              />
            </div>
          ))}
        </div>
      )
    }
  }
}

export default CardsList
