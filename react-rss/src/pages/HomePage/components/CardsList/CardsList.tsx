import { FC } from 'react'

import { Сharacter } from '../../../../api'
import CardHome from '../CardHome'

import styles from './CardsList.module.scss'

export interface CardsListProps {
  characters: Сharacter[]
  showInfoProduct: (value: number) => void
}

const CardsList: FC<CardsListProps> = ({ characters, showInfoProduct }) => {
  return (
    <div className={styles.cards}>
      {characters.map(({ id, name, species, image, status }, index) => (
        <div key={index}>
          <CardHome
            id={id}
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
