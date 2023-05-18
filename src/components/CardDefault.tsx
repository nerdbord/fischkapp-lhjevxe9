import React from 'react'
import { Pencil } from './icons/Pencil'
import css from './CardDefault.module.css'

type TProps = { text: string; onEditBtnClick(): void }

export const CardDefault: React.FC<TProps> = ({ text, onEditBtnClick }) => {
  return (
    <div className={css.defaultView}>
      <button className={css.editButton} onClick={onEditBtnClick}>
        {<Pencil />}
      </button>
      <h2>{text}</h2>
    </div>
  )
}
