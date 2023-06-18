import { useState, useRef, useEffect } from 'react'

import { CardButton } from './CardButton'

import { Delete } from './icons/Delete'
import { Pencil } from './icons/Pencil'

import css from './CardOneSite.module.css'

interface CardOneSiteProps {
  cardText: string
  saveEdit(value: string): void
}

export const CardOneSite = ({ cardText, saveEdit }: CardOneSiteProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const inputRef = useRef('')

  const handleSaveBtn = () => {
    if (inputRef.current) {
      saveEdit(inputRef.current)
    }
    setIsEditing(false)
  }
  const handleCancelBtn = () => {
    setIsEditing(false)
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target) {
      inputRef.current = e.target.value
    }
  }
  const handlePencilBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsEditing(true)
    e.stopPropagation()
  }
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    resizeTextArea()
  })
  const resizeTextArea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }

  return (
    <>
      {!isEditing ? (
        <>
          <div className={css.defaultView}>
            <button className={css.editButton} onClick={handlePencilBtn}>
              {<Pencil />}
            </button>
            <h2>{cardText}</h2>
          </div>
        </>
      ) : (
        <div
          className={`${css.defaultView} ${css.editView}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={css.deleteButton}>{<Delete />}</button>
          <textarea
            ref={textareaRef}
            cols={20}
            defaultValue={cardText}
            onChange={handleInputChange}
            onInput={resizeTextArea}
          />
          <div className={css.buttonsPanel}>
            <CardButton
              text="Cancel"
              position="left"
              onClick={handleCancelBtn}
            />
            <CardButton text="Save" position="right" onClick={handleSaveBtn} />
          </div>
        </div>
      )}
    </>
  )
}
