import React from 'react'
import { ICardData } from 'pages/FormsPage/FormPage'

import styles from './CardsList.module.scss'

interface CardsListProps {
  cards?: ICardData[]
}

class CardsList extends React.Component<CardsListProps> {
  render() {
    return (
      <div className={styles.container}>
        {this.props.cards?.map(
          ({ name, birth, category, image, checkbox, switcher }, index) => (
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
                    <span className={styles.subtitle}>Data processing:</span>
                    {checkbox}
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
