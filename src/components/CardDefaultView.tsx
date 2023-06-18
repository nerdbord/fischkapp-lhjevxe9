import { Pencil } from './icons/Pencil'
import css from './CardDefault.module.css'

interface CardDefaultProps {
  text: string
  onEditBtnClick(e: React.MouseEvent<HTMLButtonElement>): void
}

export const CardDefault = ({ text, onEditBtnClick }: CardDefaultProps) => {
  return (
    <div className={css.defaultView}>
      <button className={css.editButton} onClick={onEditBtnClick}>
        {<Pencil />}
      </button>
      <h2>{text}</h2>
    </div>
  )
}
