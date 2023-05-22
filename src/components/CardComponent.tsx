import { useState } from 'react'
import { CardOneSite } from './CardOneSite'

interface CardComponentProps {
  front: string
  back: string
}
export const CardComponent = ({ front, back }: CardComponentProps) => {
  const [isFront, setIsFront] = useState(false)
  const handleFlip = () => {
    setIsFront((isFront) => !isFront)
    console.log(isFront)
  }
  return isFront ? (
    <CardOneSite onClick={handleFlip} cardText={front} />
  ) : (
    <CardOneSite onClick={handleFlip} cardText={back} />
  )
}
