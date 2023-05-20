import css from './CardButton.module.css'

interface CardButtonProps {
  text: string
  position: 'left' | 'right'
  onClick(): void
}

export const CardButton = ({ text, position, onClick }: CardButtonProps) => {
  return (
    <button className={`${css.basic} ${css[position]}`} onClick={onClick}>
      {text}
    </button>
  )
}
