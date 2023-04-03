import { FC } from 'react'

import { Product } from '../../../../api'
import CardHome from '../CardHome'

import styles from './CardsList.module.scss'

export interface CardsListProps {
  products: Product[]
}

const CardsList: FC<CardsListProps> = ({ products }) => {
  return (
    <div className={styles.cards}>
      {products.map(({ title, price, image, description }, index) => (
        <div key={index}>
          <CardHome
            title={title}
            price={price}
            image={image[0]}
            desc={description}
          />
        </div>
      ))}
    </div>
  )
}

export default CardsList
