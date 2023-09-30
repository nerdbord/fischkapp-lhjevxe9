import { useEffect, useState } from 'react'
import { AppContainer } from './components/AppContainer'
import { AppHeader } from './components/AppHeader'
import { NewCard } from './components/NewCard'
import { CardList } from './components/CardList'
import { Loader } from './components/Loader'

import { postFlashCard } from './utils/post'
import { deleteFlashCard } from './utils/delete'
import { fetchCardsData } from './utils/get'

import { FlashCardI } from './types/types'

function App() {
  const [cardsData, setCardsList] = useState<FlashCardI[]>([])
  const [isAddingNewCard, setIsAddingNewCard] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getCards()
  }, [])

  const getCards = async () => {
    setIsLoading(true)
    try {
      const data = await fetchCardsData()
      setCardsList(data)
    } catch (err) {
      console.log('error', err)
    } finally {
      setIsLoading(false)
    }
  }

  const saveNewCard = async (front: string, back: string) => {
    const newCard = await postFlashCard({ front, back })
    setCardsList([newCard, ...cardsData])
    setIsAddingNewCard(false)
  }

  const removeCard = async (cardIdToRemove: string) => {
    await deleteFlashCard(cardIdToRemove)
    setCardsList((prevArray) =>
      prevArray.filter((card) => card._id !== cardIdToRemove)
    )
  }

  return (
    <AppContainer>
      <AppHeader
        onAddCard={() => {
          setIsAddingNewCard(true)
        }}
        cardsAmount={cardsData.length}
      />
      {isAddingNewCard && (
        <NewCard
          handleCancelBtn={() => setIsAddingNewCard(false)}
          handleSaveBtn={saveNewCard}
        />
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <CardList cardsData={cardsData} handleDeleteBtn={removeCard} />
      )}
    </AppContainer>
  )
}
export default App
