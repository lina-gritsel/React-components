import { FC } from 'react'

import styles from './Card.module.scss'

interface CardHomeProps {
  name?: string
  image?: string
  species?: string
  status?: string
  showInfoProduct: (value: boolean) => void
}

const CardHome: FC<CardHomeProps> = ({
  image,
  species,
  status,
  name,
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
        <div className={styles.title}>{name}</div>
        <div className={styles.description}>{status}</div>
        <div className={styles.price}>{species}</div>
      </div>
    </div>
  )
}

export default CardHome
