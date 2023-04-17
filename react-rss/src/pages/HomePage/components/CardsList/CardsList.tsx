import { FC } from 'react'

import Loader from '@/components/Loader'
import { Character } from '@/api'
import Card from '../Card'

import styles from './CardsList.module.scss'

export interface CardsListProps {
  characters?: Character[]
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
      {isLoading && <Loader className={styles.loader} />}
      {!isLoading && !characters?.length && <EmptyList />}
      {!isLoading && characters && (
        <div className={styles.cards}>
          {characters?.map(({ id, name, species, image, status }) => (
            <Card
              key={id}
              id={id}
              name={name}
              species={species}
              image={image}
              status={status}
              onClick={onCardClick}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default CardsList

const EmptyList = () => (
  <div className={styles.notFound}>Nothing was found for your query</div>
)
