import React, { useRef, useEffect } from 'react'
import { Delete } from './icons/Delete'
import { CardButton } from './CardButton'
import css from './CardEdit.module.css'

interface CardEditProps {
  text: string
  smallText?: string
  onCancelBtnClick(): void
  onSaveBtnClick(): void
  onInputChange(e: React.ChangeEvent<HTMLTextAreaElement>): void
}

export const CardEdit: React.FC<CardEditProps> = ({
  text,
  smallText,
  onSaveBtnClick,
  onCancelBtnClick,
  onInputChange,
}) => {
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
    <div className={css.editView}>
      <button className={css.deleteButton}>{<Delete />}</button>
      <p className={css.smallText}>{smallText}</p>
      <textarea
        ref={textareaRef}
        cols={20}
        defaultValue={text}
        onChange={onInputChange}
        onInput={resizeTextArea}
      />
      <div className={css.buttonsPanel}>
        <CardButton text="Cancel" position="left" onClick={onCancelBtnClick} />
        <CardButton text="Save" position="right" onClick={onSaveBtnClick} />
      </div>
    </div>
  )
}
