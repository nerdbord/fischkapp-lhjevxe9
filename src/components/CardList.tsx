import styles from './CardList.module.css'
import { CardComponent } from './CardComponent'

interface Cards {
  cards: Card[]
}

interface Card {
  id: number
  front: string
  back: string
}

export default function CardList({ cards }: Cards) {
  const clonedArray = [...cards]
  return (
    <ul className={styles['card-list']}>
      {clonedArray.reverse().map((card) => (
        <li key={card.id}>
          <CardComponent front={card.front} back={card.back} />
        </li>
      ))}
    </ul>
  )
}
