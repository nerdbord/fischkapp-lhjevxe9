import React from 'react'
import { CardDefault } from './CardDefault'
import { CardEdit } from './CardEdit'
import css from './CardComponent.module.css'

interface TProps {
  front: string
  back: string
}

export const CardComponent: React.FC<TProps> = ({ front }) => {
  return (
    <div className={css.card}>
      <CardDefault text={front} />
      <CardEdit text={front} />
    </div>
  )
}
