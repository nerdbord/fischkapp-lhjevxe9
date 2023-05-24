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
        refBack.current.classList.remove(css.fadeIn)
      }
      setTimeout(() => {
        if (refBack.current && refFront.current) {
          refBack.current.classList.add(css.backfaceHidden)
          refBack.current.classList.remove(css.backfaceVisible)
          refFront.current.classList.add(css.backfaceVisible)
          refFront.current.classList.remove(css.backfaceHidden)
          refFront.current.classList.remove(css.fadeOut)
          refFront.current.classList.add(css.fadeIn)
        }
      }, 600) //~~half time of css.card transform transition
    } else {
      if (refFront.current) {
        refFront.current.classList.add(css.fadeOut)
        refFront.current.classList.remove(css.fadeIn)
      }
      setTimeout(() => {
        if (refBack.current && refFront.current) {
          refFront.current.classList.add(css.backfaceHidden)
          refFront.current.classList.remove(css.backfaceVisible)
          refBack.current.classList.remove(css.backfaceHidden)
          refBack.current.classList.add(css.backfaceVisible)
          refBack.current.classList.remove(css.fadeOut)
          refBack.current.classList.add(css.fadeIn)
          console.log('into abck')
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
      <div className={`${css.back} ${css.backfaceHidden}`} ref={refBack}>
        <CardOneSite cardText={back} />
      </div>
    </div>
  )
}
