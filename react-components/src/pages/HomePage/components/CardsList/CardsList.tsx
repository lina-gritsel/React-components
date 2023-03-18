import SearchBar from '../SearchBar'
import React, { ChangeEvent } from 'react'
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
  error: null | string
  isLoaded: boolean
  items: Product[]
  search: string
}

class CardsList extends React.Component<{}, ResponseProducts> {
  constructor(props: ResponseProducts) {
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

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    localStorage.setItem(
      'searchValue',
      JSON.stringify(event?.currentTarget.value) as string
    )
    this.setState({
      search: JSON.parse(localStorage.getItem('searchValue') as string),
    })
  }

  render() {
    const { error, isLoaded, items } = this.state
    console.log(this.state.search)

    if (error) return <div>Error: {error}</div>

    if (!isLoaded) return <div>Loading...</div>

    const filterProducts = items.filter((item) => {
      return (
        item.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
          -1 ||
        item.price
          .toString()
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1 ||
        item.description
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      )
    })
    return (
      <div className={styles.wrapperCardsList}>
        <div className={styles.searchBar}>
          <SearchBar
            onInputChange={this.onInputChange.bind(this)}
            value={this.state.search}
          />
        </div>
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
