import { FC } from 'react'

import Loader from '../../../../components/Loader'
import { Сharacter } from '../../../../api'
import Card from '../Card'

import styles from './CardsList.module.scss'

export interface CardsListProps {
  characters?: Сharacter[]
  onCardClick: (value: number) => void
  isLoading?: boolean
}

const CardsList: FC<CardsListProps> = ({
  characters,
  onCardClick,
  isLoading,
}) => {
  return (
    <>
      {!isLoading && characters ? (
        <div className={styles.cards}>
          {characters.map(({ id, name, species, image, status }) => (
            <div key={id}>
              <Card
                id={id}
                name={name}
                species={species}
                image={image}
                status={status}
                onClick={onCardClick}
              />
            </div>
          ))}
        </div>
      ) : (
        <EmptyList />
      )}
      {isLoading && <Loader className={styles.loader} />}
    </>
  )
}

export default CardsList

const EmptyList = () => (
  <div className={styles.notFound}>Nothing was found for your query</div>
)