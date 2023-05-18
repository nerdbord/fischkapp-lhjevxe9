import React from 'react'
import css from './CardComponent.module.css'
import { Delete } from './icons/Delete'

type TProps = { text: string }

export const CardEdit: React.FC<TProps> = ({ text }) => {
  return (
    <div className={css.editView}>
      <button className={css.deleteButton}>{<Delete />}</button>
      <textarea wrap="hard" cols={20} defaultValue={text} />
      <div className={css.editButtons}>
        <button className={css.cancelButton}>Cancel</button>
        <button className={css.saveButton}>Save</button>
      </div>
    </div>
  )
}
