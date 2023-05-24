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
    if (isFront) {
      if (refBack.current && refFront.current) {
        refBack.current.classList.add(css.fadeOut)
      }
      setTimeout(() => {
        if (refBack.current && refFront.current) {
          refBack.current.classList.add(css.hidden)
          refFront.current.classList.remove(css.hiddenn)
          refFront.current.classList.remove(css.fadeOut)
        }
      }, 600) //~~half time of css.card transform transition
    } else {
      if (refFront.current) {
        refFront.current.classList.add(css.fadeOut)
      }
      setTimeout(() => {
        if (refBack.current && refFront.current) {
          refFront.current.classList.add(css.hidden)
          refBack.current.classList.remove(css.hidden)
          refBack.current.classList.remove(css.fadeOut)
        }
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
