import React, { useRef, useEffect } from 'react'

import { Delete } from './icons/Delete'
import { CardButton } from './CardButton'
import css from './CardEdit.module.css'

interface CardEditProps {
  text: string
  onCancelBtnClick(e: React.MouseEvent<HTMLButtonElement>): void
  onSaveBtnClick(e: React.MouseEvent<HTMLButtonElement>): void
  onInputChange(e: React.ChangeEvent<HTMLTextAreaElement>): void
}

export const CardEdit = ({
  text,
  onSaveBtnClick,
  onCancelBtnClick,
  onInputChange,
}: CardEditProps) => {
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
    <div className={css.editView} onClick={(e) => e.stopPropagation()}>
      <button className={css.deleteButton}>{<Delete />}</button>
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
