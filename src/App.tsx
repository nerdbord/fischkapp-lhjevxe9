import { useEffect, useState } from 'react'
import { AppContainer } from './components/AppContainer'
import { AppHeader } from './components/AppHeader'
import { NewCard } from './components/NewCard'
import { CardList } from './components/CardList'
import { Loader } from './components/Loader'

import { postFlashCard } from './utils/post'
import { fetchCardsData } from './utils/get'

import { FlashCardI } from './types/types'

// const mockList: FlashCardI[] = [
//   { front: 'Jon Doe', back: 'Lorem ipsum', id: '1' },
//   { front: 'Bigos', back: 'Dobry jest', id: '2' },
//   { front: 'Serniczka', back: 'Zawsze zjem', id: ' 3' },
// ]

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
      {isLoading ? <Loader /> : <CardList cardsData={cardsData} />}
    </AppContainer>
  )
}
export default App
