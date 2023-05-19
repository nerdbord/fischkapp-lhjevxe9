import React from 'react'
import css from './CardButton.module.css'
interface CardButtonProps {
  text: string
  position: 'left' | 'right'
  onClick(): void
}

export const CardButton: React.FC<CardButtonProps> = ({
  text,
  position,
  onClick,
}) => {
  const combinedClassName = `${css.basic} ${css[position]}`
  return (
    <button className={combinedClassName} onClick={onClick}>
      {text}
    </button>
  )
}
