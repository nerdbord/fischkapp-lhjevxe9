import { useState } from 'react'
import { AppContainer } from './components/AppContainer'
import { AppHeader } from './components/AppHeader'
import { NewCard } from './components/NewCard'
import { CardList } from './components/CardList'

const mockList = [
  { front: 'Jon Doe', back: 'Lorem ipsum', id: 1 },
  { front: 'Bigos', back: 'Dobry jest', id: 2 },
  { front: 'Serniczka', back: 'Zawsze zjem', id: 3 },
]

function App() {
  const [cardsData, setCardsList] = useState(mockList)
  const [isAddingNewCard, setIsAddingNewCard] = useState(false)

  const saveNewCard = (frontText: string, backText: string) => {
    setCardsList([
      ...cardsData,
      { front: frontText, back: backText, id: Math.random() },
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
      <CardList cardsData={cardsData} />
    </AppContainer>
  )
}
export default App
