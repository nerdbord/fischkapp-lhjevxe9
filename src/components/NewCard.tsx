import { useEffect, useState } from 'react'
import { CardEdit } from './CardEdit'
import { CardButton } from './CardButton'
import css from './NewCard.module.css'

export const NewCard = () => {
  const [isFirstSite, setisFirstSite] = useState(true)
  const [textFront, setTextFront] = useState('')
  const [textBack, setTextBack] = useState('')
  useEffect(() => {
    console.log('zmiana')
  }, [isFirstSite])

  const handleInputFront = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextFront(e.target.value)
  }
  const handleInputBack = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextBack(e.target.value)
  }
  return (
    <div className={css.editView}>
      {isFirstSite ? (
        <CardEdit
          text={textFront}
          hideDeleteBtn={true}
          onInputChange={handleInputFront}
        >
          <CardButton text="Cancel" position="left" onClick={() => {}} />
          <CardButton
            text="Next"
            position="right"
            onClick={() => {
              setisFirstSite(false)
            }}
          />
        </CardEdit>
      ) : (
        <CardEdit
          text={textBack}
          smallText={textFront}
          onInputChange={handleInputBack}
        >
          <CardButton
            text="Cancel"
            position="left"
            onClick={() => {
              setisFirstSite(true)
            }}
          />
          <CardButton text="Save" position="right" onClick={() => {}} />
        </CardEdit>
      )}
    </div>
  )
}
