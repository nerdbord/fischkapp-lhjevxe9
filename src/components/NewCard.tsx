import React, { FormEvent, useState } from 'react'

import { Delete } from './icons/Delete'
import { CardButton } from './CardButton'
import { Loader } from './Loader'

import css from './NewCard.module.css'

interface NewCardProps {
  handleCancelBtn(): void
  handleSaveBtn(frontText: string, backText: string): void
}

export const NewCard = ({ handleCancelBtn, handleSaveBtn }: NewCardProps) => {
  const [frontText, setFrontText] = useState('')
  const [backText, setBackText] = useState('')
  const [isFirstSite, setIsFirstSite] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const resizeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = 'auto'
    e.target.style.height = `${e.target.scrollHeight}px`
  }
  const handleNextBtn = () => {
    setIsFirstSite(false)
  }
  const handleBackBtn = () => {
    setIsFirstSite(true)
  }
  const saveNewCard = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    handleSaveBtn(frontText, backText)
  }

  return (
    <form onSubmit={saveNewCard}>
      <div className={`${css.newCard} ${!isFirstSite ? css.hidden : ''}`}>
        <label htmlFor="frontTextarea" className={css.smallText}>
          {backText}
        </label>
        <textarea
          cols={20}
          value={frontText}
          id="frontTextarea"
          name="frontTextarea"
          data-testid="frontTextarea"
          onInput={resizeTextArea}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setFrontText(e.target.value)
          }}
        />
        <div className={css.buttonsPanel}>
          <CardButton
            text="Cancel"
            position="left"
            onClick={handleCancelBtn}
            type="reset"
          />
          <CardButton
            text="Next"
            position="right"
            onClick={handleNextBtn}
            type="button"
          />
        </div>
      </div>

      <div className={`${css.newCard} ${isFirstSite ? css.hidden : ''}`}>
        {!isLoading ? (
          <>
            <button className={css.deleteButton} onClick={handleCancelBtn}>
              <Delete />
            </button>
            <label htmlFor="backTextarea" className={css.smallText}>
              {frontText}
            </label>
            <textarea
              cols={20}
              value={backText}
              id="backTextarea"
              name="backTextarea"
              data-testid="backTextarea"
              onInput={resizeTextArea}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setBackText(e.target.value)
              }}
            />
            <div className={css.buttonsPanel}>
              <CardButton
                text="Back"
                position="left"
                onClick={handleBackBtn}
                type="button"
              />
              <CardButton
                text="Save"
                position="right"
                onClick={() => null}
                type="submit"
                isDisabled={!(!!backText && !!frontText)}
              />
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </form>
  )
}
