import React, { useState, useRef, useEffect } from 'react'
import { CardDefault } from './CardDefault'
import { CardEdit } from './CardEdit'
import { CardButton } from './CardButton'

interface CardOneSiteProps {
  cardText: string
}

export const CardOneSite = ({ cardText }: CardOneSiteProps) => {
  const [text, setText] = useState(cardText)
  const [isEditing, setIsEditing] = useState(false)
  const inputRef = useRef('')

  useEffect(() => {
    setText(cardText)
  }, [cardText])

  const handleSaveBtn = () => {
    if (inputRef.current) {
      setText(inputRef.current)
    }
    setIsEditing(false)
  }
  const handlePencilBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsEditing(true)
    e.stopPropagation()
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target) {
      inputRef.current = e.target.value
    }
  }
  return !isEditing ? (
    <CardDefault text={text} onEditBtnClick={handlePencilBtn} />
  ) : (
    <CardEdit text={text} onInputChange={handleInputChange}>
      <CardButton
        text="Cancel"
        position="left"
        onClick={() => {
          setIsEditing(false)
        }}
      />
      <CardButton text="Save" position="right" onClick={handleSaveBtn} />
    </CardEdit>
  )
}
