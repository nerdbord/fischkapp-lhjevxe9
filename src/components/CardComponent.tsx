import React from 'react'
import { CardOneSite } from './CardOneSite'

interface CardComponentProps {
  front: string
  back: string
}
export const CardComponent: React.FC<CardComponentProps> = ({
  front,
  back,
}) => {
  return (
    <div style={{ width: '100%' }}>
      //delete this div after implement "flip" effect
      <CardOneSite cardText={front} />
      <CardOneSite cardText={back} />
    </div>
  )
}
