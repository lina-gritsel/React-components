import React from 'react'

import Card from '../Card/Card'

import styles from './CardsList.module.scss'

export interface Rating {
  rate: number
  count: number
}
export interface Product {
  title: string
  price: number
  description: string
  category: string
  image: string
  id?: number
  rating?: Rating
}

interface ResponseProducts {
  error: null | string
  isLoaded: boolean
  items: Product[]
  search: string
}

interface CardsListProps {
  searchValue: string
}

class CardsList extends React.Component<CardsListProps, ResponseProducts> {
  constructor(props: CardsListProps) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      search: '',
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

    if (error) return <div>Error: {error}</div>

    if (!isLoaded) return <div>Loading...</div>

    const filterProducts = items.filter((item) => {
      return (
        item.title
          .toLowerCase()
          .indexOf(this.props.searchValue.toLowerCase()) !== -1 ||
        item.price
          .toString()
          .toLowerCase()
          .indexOf(this.props.searchValue.toLowerCase()) !== -1 ||
        item.description
          .toLowerCase()
          .indexOf(this.props.searchValue.toLowerCase()) !== -1
      )
    })
    return (
      <div className={styles.wrapperCardsList}>
        <div className={styles.searchBar}></div>
        <div className={styles.cards}>
          {filterProducts.map(({ title, price, image, description }, index) => (
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
      </div>
    )
  }
}

export default CardsList
