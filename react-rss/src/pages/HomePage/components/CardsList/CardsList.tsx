import { FC } from 'react'

import { getInfoproduct } from '../../hooks'
import { Product } from '../../../../api'
import CardHome from '../CardHome'

import styles from './CardsList.module.scss'

export interface CardsListProps {
  products: Product[]
  showInfoProduct: (value: boolean) => void
}

const CardsList: FC<CardsListProps> = ({ products, showInfoProduct }) => {
  return (
    <div className={styles.cards}>
      {products.map(({ title, price, image, description }, index) => (
        <div key={index}>
          <CardHome
            title={title}
            price={price}
            image={image[0]}
            desc={description}
            showInfoProduct={showInfoProduct}
          />
        </div>
      ))}
    </div>
  )
}

export default CardsList
