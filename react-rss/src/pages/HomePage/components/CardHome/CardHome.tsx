import { FC } from 'react'

import styles from './Card.module.scss'

interface CardHomeProps {
  title?: string
  image?: string
  price?: number
  desc?: string
  showInfoProduct: (value: boolean) => void
}

const CardHome: FC<CardHomeProps> = ({
  image,
  price,
  desc,
  title,
  showInfoProduct,
}) => {
  return (
    <div
      className={styles.cardWrapper}
      onClick={() => showInfoProduct(true)}
      data-testid="card"
    >
      <img alt="imageProduct" className={styles.imageProduct} src={image} />
      <div className={styles.wrapperInfo}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{desc}</div>
        <div className={styles.price}>${price}</div>
      </div>
    </div>
  )
}

export default CardHome
