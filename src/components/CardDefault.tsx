import React from 'react'

import { Pencil } from './icons/Pencil'
type TProps = { text: string }
import css from './CardComponent.module.css'

export const CardDefault: React.FC<TProps> = ({ text }) => {
  return (
    <div className={css.defaultView}>
      <button className={css.editButton}>{<Pencil />}</button>
      <h2>{text}</h2>
    </div>
  )
}
