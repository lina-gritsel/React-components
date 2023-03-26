import React from 'react'
import { ICardData } from '../../../../pages/types'

import styles from './CardsList.module.scss'

interface CardsListProps {
  cards?: ICardData[]
}

class CardsList extends React.Component<CardsListProps> {
  render() {
    return (
      <div className={styles.container}>
        {this.props.cards?.map(
          ({ name, birth, category, image, switcher }, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <img src={image} className={styles.image} />
                <div className={styles.dataUser}>
                  <div className={styles.infoUser}>
                    <span className={styles.subtitle}>Name:</span> {name}
                  </div>
                  <div className={styles.infoUser}>
                    <span className={styles.subtitle}>Birth:</span> {birth}
                  </div>
                  <div className={styles.infoUser}>
                    <span className={styles.subtitle}>Category:</span>
                    {category}
                  </div>
                  <div className={styles.infoUser}>
                    <span className={styles.subtitle}>Notices:</span>
                    {switcher}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    )
  }
}

export default CardsList
