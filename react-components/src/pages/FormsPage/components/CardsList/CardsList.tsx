import { FC } from 'react'
import { ICardData } from '../../hooks'

import styles from './CardsList.module.scss'

interface CardsListProps {
  cards?: ICardData[]
}

const CardsList: FC<CardsListProps> = ({ cards }) => {
  return (
    <div className={styles.container}>
      {cards?.map(({ name, date, category, image, radio }, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.cardHeader}>
            <img src={image} className={styles.image} />
            <div className={styles.dataUser}>
              <div className={styles.infoUser}>
                <span className={styles.subtitle}>Name:</span> {name}
              </div>
              <div className={styles.infoUser}>
                <span className={styles.subtitle}>Birth:</span> {date}
              </div>
              <div className={styles.infoUser}>
                <span className={styles.subtitle}>Category:</span>
                {category}
              </div>
              <div className={styles.infoUser}>
                <span className={styles.subtitle}>Notices:</span>
                {radio}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardsList
