import React, { useRef, useEffect } from 'react'
import { Delete } from './icons/Delete'
import css from './CardEdit.module.css'

interface CardEditProps {
  text: string
  smallText?: string
  onInputChange(e: React.ChangeEvent<HTMLTextAreaElement>): void
  hideDeleteBtn?: boolean
  children: React.ReactNode
}

export const CardEdit = ({
  text,
  smallText,
  onInputChange,
  hideDeleteBtn = false,
  children,
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
    <div
      className={css.editView}
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      {!hideDeleteBtn ? (
        <button className={css.deleteButton}>{<Delete />}</button>
      ) : null}
      {smallText ? <p className={css.smallText}>{smallText}</p> : null}
      <textarea
        ref={textareaRef}
        cols={20}
        defaultValue={text}
        onChange={onInputChange}
        onInput={resizeTextArea}
      />
      <div className={css.buttonsPanel}>{children}</div>
    </div>
  )
}
