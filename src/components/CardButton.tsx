import css from './CardButton.module.css'

interface CardButtonProps {
  text: string
  position: 'left' | 'right'
  type?: 'button' | 'submit' | 'reset'
  onClick(e?: React.MouseEvent<HTMLButtonElement>): void
}

export const CardButton = ({
  text,
  type,
  position,
  onClick,
}: CardButtonProps) => {
  return (
    <button
      className={`${css.basic} ${css[position]}`}
      onClick={onClick}
      {...(type ? { type } : {})}
    >
      {text}
    </button>
  )
}
