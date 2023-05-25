import { useState, useRef } from 'react'
import { CardOneSite } from './CardOneSite'
import css from './CardComponent.module.css'

interface CardComponentProps {
  front: string
  back: string
}
export const CardComponent = ({ front, back }: CardComponentProps) => {
  const [isFront, setIsFront] = useState(false)
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
    >
      <div ref={refFront} className={css.front}>
        <CardOneSite cardText={front} />
      </div>
      <div className={`${css.back} ${css.hidden}`} ref={refBack}>
        <CardOneSite cardText={back} />
      </div>
    </div>
  )
}
