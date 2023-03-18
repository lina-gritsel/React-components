import SearchBar from '../SearchBar'
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
  search: string
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onInputChange = (event: any) => {
    localStorage.setItem(
      'searchValue',
      JSON.stringify(event.target.value) as string
    )
    this.setState({
      search: JSON.parse(localStorage.getItem('searchValue') as string),
    })
  }

  render() {
    const { error, isLoaded, items } = this.state
    console.log(this.state.search)

    if (error) return <div>Error: {error.message}</div>

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
