import { CardOneSite } from './CardOneSite'

interface CardComponentProps {
  front: string
  back: string
}
export const CardComponent = ({ front, back }: CardComponentProps) => {
  return (
    <div style={{ width: '100%' }}>
      {/* delete this div after implement "flip" effect} */}
      <CardOneSite cardText={front} />
      <CardOneSite cardText={back} />
    </div>
  )
}
