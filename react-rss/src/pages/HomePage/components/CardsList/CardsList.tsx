import { FC } from 'react'

import { getInfoproduct } from '../../hooks'
import { Сharacter } from '../../../../api'
import CardHome from '../CardHome'

import styles from './CardsList.module.scss'

export interface CardsListProps {
  characters: Сharacter[]
  showInfoProduct: (value: boolean) => void
}

const CardsList: FC<CardsListProps> = ({ characters, showInfoProduct }) => {
  return (
    <div className={styles.cards}>
      {characters.map(({ name, species, image, status }, index) => (
        <div key={index}>
          <CardHome
            name={name}
            species={species}
            image={image}
            status={status}
            showInfoProduct={showInfoProduct}
          />
        </div>
      ))}
    </div>
  )
}

export default CardsList
