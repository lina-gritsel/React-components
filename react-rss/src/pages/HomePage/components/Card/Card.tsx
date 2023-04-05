import { FC } from 'react'

import styles from './Card.module.scss'

interface CardProps {
  id: number
  name?: string
  image?: string
  species?: string
  status?: string
  onClick: (value: number) => void
}

const Card: FC<CardProps> = ({
  image,
  species,
  status,
  name,
  onClick,
  id,
}) => {
  return (
    <div className={styles.card} onClick={() => onClick(id)} data-testid="card">
      <img className={styles.image} src={image} alt="imageProduct" />
      <div className={styles.content}>
        <div className={styles.title}>{name}</div>
        <div className={styles.description}>{status}</div>
        <div className={styles.price}>{species}</div>
      </div>
    </div>
  )
}

export default Card
