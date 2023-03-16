import React from 'react'

import styles from './Card.module.scss'

interface CardProps {
  title: string
  image: string
  price: number
}

class Card extends React.Component<CardProps> {
  render() {
    return (
      <div className={styles.cards}>
        <img className={styles.imageProduct} src={this.props.image} />
        <div>{this.props.title}</div>
        <div>{this.props.price}</div>
      </div>
    )
  }
}

export default Card
