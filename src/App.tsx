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
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  const saveNewCard = async (front: string, back: string) => {
    const newCardData = await postFlashCard({ front, back })
    setCardsList([
      ...cardsData,
      {
        front: newCardData.front,
        back: newCardData.back,
        _id: newCardData._id,
      },
    ])
    setIsAddingNewCard(false)
  }

  const removeCard = (cardIdToRemove: string) => {
    setCardsList((prevArray) =>
      prevArray.filter((card) => card._id !== cardIdToRemove)
    )
    deleteFlashCard(cardIdToRemove)
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
