import React, { useState } from 'react'

import { Delete } from './icons/Delete'
import { CardButton } from './CardButton'

import css from './NewCard.module.css'

interface NewCardProps {}

export const NewCard = ({}: NewCardProps) => {
  const [frontText, setFrontText] = useState('')
  const [backText, setBackText] = useState('')
  const [isFirstSite, setIsFirstSite] = useState(true)

  const resizeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = 'auto'
    e.target.style.height = `${e.target.scrollHeight}px`
  }
  const handleCancelBtn = () => {
    //close NewCart component and show card list
  }
  const handleNextBtn = () => {
    setIsFirstSite(false)
  }
  const handleBackBtn = () => {
    setIsFirstSite(true)
  }

  const handleSaveBtn = () => {
    console.log(`you create new card front: ${frontText}, back: ${backText}`)
  }

  return (
    <>
      <div className={`${css.newCard} ${!isFirstSite ? css.hidden : ''}`}>
        <textarea
          cols={20}
          value={frontText}
          onInput={resizeTextArea}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setFrontText(e.target.value)
          }}
        />
        <div className={css.buttonsPanel}>
          <CardButton text="Cancel" position="left" onClick={handleCancelBtn} />
          <CardButton text="Next" position="right" onClick={handleNextBtn} />
        </div>
      </div>

      <div className={`${css.newCard} ${isFirstSite ? css.hidden : ''}`}>
        <button className={css.deleteButton}>{<Delete />}</button>
        <p className={css.smallText}>{frontText}</p>
        <textarea
          cols={20}
          value={backText}
          onInput={resizeTextArea}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setBackText(e.target.value)
          }}
        />
        <div className={css.buttonsPanel}>
          <CardButton text="Back" position="left" onClick={handleBackBtn} />
          <CardButton text="Save" position="right" onClick={handleSaveBtn} />
        </div>
      </div>
    </>
  )
}
