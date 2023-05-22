import React, { useState, useRef } from 'react'
import { CardDefault } from './CardDefault'
import { CardEdit } from './CardEdit'

interface CardOneSiteProps {
  cardText: string
  onClick(): void
}

export const CardOneSite = ({ cardText, onClick }: CardOneSiteProps) => {
  const [text, setText] = useState(cardText)
  const [isEditing, setIsEditing] = useState(false)
  const inputRef = useRef('')

  const handleSaveBtn = () => {
    if (inputRef.current) {
      setText(inputRef.current)
    }
    setIsEditing(false)
  }

  return (
    <div onClick={onClick}>
      {!isEditing ? (
        <CardDefault
          text={text}
          onEditBtnClick={() => {
            setIsEditing(true)
          }}
        />
      ) : (
        <CardEdit
          text={text}
          onCancelBtnClick={() => {
            setIsEditing(false)
          }}
          onSaveBtnClick={handleSaveBtn}
          onInputChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            if (e.target) {
              inputRef.current = e.target.value
            }
          }}
        />
      )}
    </div>
  )
}
