import { useState, useRef } from 'react'
import { CardOneSite } from './CardOneSite'
import css from './CardComponent.module.css'
import { patchFlashCard } from '../utils/patch'

interface CardComponentProps {
  front: string
  back: string
  id: string
  handleDeleteBtn(cardIdToRemove: string): void
}
export const CardComponent = ({
  front,
  back,
  id,
  handleDeleteBtn,
}: CardComponentProps) => {
  const [isFront, setIsFront] = useState(false)
  const [frontText, setFrontText] = useState(front)
  const [backText, setBackText] = useState(back)

  const editFront = (value: string) => {
    setFrontText(value)
    patchFlashCard({ _id: id, front: value, back: backText })
  }
  const editBack = (value: string) => {
    setBackText(value)
    patchFlashCard({ _id: id, front: frontText, back: value })
  }
  const removeCard = () => {
    handleDeleteBtn(id)
  }

  const refFront = useRef<HTMLDivElement | null>(null)
  const refBack = useRef<HTMLDivElement | null>(null)

  const handleFlip = () => {
    setIsFront((isFront) => !isFront)

    const refFrontCurrent = refFront.current
    const refBackCurrent = refBack.current

    const classListFront = refFrontCurrent?.classList
    const classListBack = refBackCurrent?.classList

    const fadeInClass = css.fadeOut
    const hiddenClass = css.hidden

    if (isFront) {
      classListBack?.add(fadeInClass)
      setTimeout(() => {
        classListBack?.add(hiddenClass)
        classListFront?.remove(hiddenClass)
        classListFront?.remove(fadeInClass)
      }, 600)
    } else {
      classListFront?.add(fadeInClass)
      setTimeout(() => {
        classListFront?.add(hiddenClass)
        classListBack?.remove(hiddenClass)
        classListBack?.remove(fadeInClass)
      }, 600)
    }
  }
  return (
    <div
      onClick={handleFlip}
      className={`${css.card} ${isFront ? css.flipped : ''}`}
      data-testid="card"
    >
      <div ref={refFront} className={css.front}>
        <CardOneSite
          cardText={frontText}
          saveEdit={editFront}
          handleDeleteBtn={removeCard}
        />
      </div>
      <div className={`${css.back} ${css.hidden}`} ref={refBack}>
        <CardOneSite
          cardText={backText}
          saveEdit={editBack}
          handleDeleteBtn={removeCard}
        />
      </div>
    </div>
  )
}
