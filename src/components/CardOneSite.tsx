import { useState, useRef, useEffect } from 'react'
import { CardDefault } from './CardDefault'
import { CardEdit } from './CardEdit'

interface CardOneSiteProps {
  cardText: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
  cssClas?: string
}

export const CardOneSite = ({
  cardText,
  cssClas,
  onClick,
}: CardOneSiteProps) => {
  const [text, setText] = useState(cardText)
  const [isEditing, setIsEditing] = useState(false)
  const inputRef = useRef('')

  useEffect(() => {
    setText(cardText)
  }, [cardText])

  
  const handleSaveBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (inputRef.current) {
      setText(inputRef.current)
    }
    setIsEditing(false)
    e.stopPropagation()
  }
  const handleCancelBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsEditing(false)
    e.stopPropagation()
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
    <div onClick={onClick} className={cssClas}>
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
    </div>
  )
}
