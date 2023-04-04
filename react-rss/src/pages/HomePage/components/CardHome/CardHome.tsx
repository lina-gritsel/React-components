import { FC } from 'react'

import styles from './Card.module.scss'

interface CardHomeProps {
  id: number
  name?: string
  image?: string
  species?: string
  status?: string
  showInfoProduct: (value: number) => void
}

const CardHome: FC<CardHomeProps> = ({
  image,
  species,
  status,
  name,
  showInfoProduct,
  id,
}) => {
  return (
    <div
      className={styles.cardWrapper}
      onClick={() => showInfoProduct(id)}
      data-testid="card"
    >
      <img alt="imageProduct" className={styles.imageProduct} src={image} />
      <div className={styles.wrapperInfo}>
        <div className={styles.title}>{name}</div>
        <div className={styles.description}>{status}</div>
        <div className={styles.price}>{species}</div>
      </div>
    </div>
  )
}

export default CardHome
