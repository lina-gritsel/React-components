import { FC } from 'react'
import { ICardData } from '../../hooks'

import styles from './CardsList.module.scss'

interface CardsListProps {
  cards?: ICardData[]
}

const CardsList: FC<CardsListProps> = ({ cards }) => {
  return (
    <div className={cards?.length ? styles.show : styles.hidden}>
      <div className={styles.characters}>your characters</div>
      <div className={styles.cards}>
        {cards?.map(({ name, date, category, file, radio }, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardWraper}>
              <img src={file} className={styles.image} />
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
        ))}
      </div>
    </div>
  )
}

export default CardsList
