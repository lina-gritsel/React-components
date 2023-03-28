import { FC } from 'react'

import CardHome from '../CardHome'
import { CardsListProps } from './types'
import { useCardsListHome } from './hooks'

import styles from './CardsList.module.scss'

const CardsList: FC<CardsListProps> = ({ searchValue }) => {
  const { filterProducts, isLoaded, error } = useCardsListHome(searchValue)

  return (
    <>
      {!isLoaded && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <div className={styles.wrapperCardsList}>
        <div className={styles.cards}>
          {filterProducts.map(({ title, price, image, description }, index) => (
            <div key={index}>
              <CardHome
                title={title}
                price={price}
                image={image}
                desc={description}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CardsList
