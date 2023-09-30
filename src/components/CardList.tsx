import styles from './CardList.module.css'
import { CardComponent } from './CardComponent'
import { FlashCardI } from '../types/types'

interface Cards {
  cardsData: FlashCardI[]
  handleDeleteBtn(cardIdToRemove: string): void
}

export function CardList({ cardsData, handleDeleteBtn }: Cards) {
  return (
    <ul className={styles['card-list']}>
      {cardsData.map((card) => (
        <li key={card._id}>
          <CardComponent
            front={card.front}
            back={card.back}
            id={card._id}
            handleDeleteBtn={handleDeleteBtn}
          />
        </li>
      ))}
    </ul>
  )
}
