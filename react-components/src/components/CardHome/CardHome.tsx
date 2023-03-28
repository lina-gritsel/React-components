import { FC } from 'react'

import likeIcon from '../../assets/like.png'

import styles from './Card.module.scss'

interface CardHomeProps {
  title?: string
  image?: string
  price?: number
  desc?: string
}

const CardHome: FC<CardHomeProps> = ({ image, price, desc, title }) => {
  return (
    <div className={styles.cardWrapper} data-testid="card">
      <img alt="imageProduct" className={styles.imageProduct} src={image} />
      <div className={styles.wrapperInfo}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{desc}</div>
        <div className={styles.price}>${price}</div>
        <img alt="like" className={styles.likeIcon} src={likeIcon} />
      </div>
    </div>
  )
}

export default CardHome
