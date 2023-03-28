import { FC } from 'react'

import styles from './Card.module.scss'

interface CardProps {
  title?: string
  image?: string
  price?: number
  desc?: string
}

const Card: FC<CardProps> = ({ image, price, desc, title }) => {
  return (
    <div className={styles.cardWrapper} data-testid="card">
      <img alt="imageProduct" className={styles.imageProduct} src={image} />
      <div className={styles.wrapperInfo}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>{price}$</div>
        <div className={styles.description}>{desc}</div>
      </div>
    </div>
  )
}

export default Card
