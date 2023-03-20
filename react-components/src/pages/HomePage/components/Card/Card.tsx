import React from 'react'

import styles from './Card.module.scss'

interface CardProps {
  title: string
  image: string
  price: number
  desc: string
}

class Card extends React.Component<CardProps> {
  render() {
    return (
      <div className={styles.cardWrapper}>
        <img
          alt="imageProduct"
          className={styles.imageProduct}
          src={this.props.image}
        />
        <div className={styles.wrapperInfo}>
          <div className={styles.title}>{this.props.title}</div>
          <div className={styles.price}>{this.props.price}$</div>
          <div className={styles.description}>{this.props.desc}</div>
        </div>
      </div>
    )
  }
}

export default Card
