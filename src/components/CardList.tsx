import styles from './CardList.module.css'
import { CardComponent } from './CardComponent'

interface Cards {
  cardsData: {
    front: string
    back: string
    id: string
  }[]
}

export function CardList({ cardsData }: Cards) {
  const clonedArray = [...cardsData]

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
