import { useState, useRef, useEffect } from 'react'
import { CardDefault } from './CardDefault'
import { CardEdit } from './CardEdit'

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

  return (
    <>
      {!isEditing ? (
        <CardDefault text={text} onEditBtnClick={handlePencilBtn} />
      ) : (
        <CardEdit
          text={text}
          onCancelBtnClick={handleCancelBtn}
          onSaveBtnClick={handleSaveBtn}
          onInputChange={handleInputChange}
        />
      )}
    </>
  )
}
