import React, { useRef, useEffect } from 'react'
import { Delete } from './icons/Delete'
import css from './CardComponent.module.css'

type TProps = {
  text: string
  onCancelBtnClick(): void
  onSaveBtnClick(): void
  onInputChange(e: React.ChangeEvent<HTMLTextAreaElement>): void
}

export const CardEdit: React.FC<TProps> = ({
  text,
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
      <textarea
        ref={textareaRef}
        cols={20}
        defaultValue={text}
        onChange={onInputChange}
        onInput={resizeTextArea}
        rows={1}
      />
      <div className={css.editButtons}>
        <button className={css.cancelButton} onClick={onCancelBtnClick}>
          Cancel
        </button>
        <button className={css.saveButton} onClick={onSaveBtnClick}>
          Save
        </button>
      </div>
    </div>
  )
}
