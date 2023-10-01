import { ButtonIcon } from './ButtonIcon'
import { Add } from './icons/Add'

import styles from './AppHeader.module.css'

interface AppHeaderProps {
  cardsAmount: number
  onAddCard(): void
}

export const AppHeader = (props: AppHeaderProps) => (
  <header className={styles.header}>
    <h1>
      Fischkapp <span className={styles.counter}>{props.cardsAmount}</span>
    </h1>
    <ButtonIcon icon={<Add />} onClick={props.onAddCard} testId="Add" />
  </header>
)
