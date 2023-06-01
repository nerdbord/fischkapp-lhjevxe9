import { useState } from 'react'
import { AppContainer } from './components/AppContainer'
import { AppHeader } from './components/AppHeader'
import { CardComponent } from './components/CardComponent'
import { NewCard } from './components/NewCard'

const mockList = [
  { front: 'Jon Doe', back: 'Lorem ipsum', id: '1' },
  { front: 'Bigos', back: 'Dobry jest', id: '1a3' },
  { front: 'Serniczka', back: 'Zawsze zjem', id: '12' },
]

function App() {
  const [isAddingNewCard, setIsAddingNewCard] = useState(false)
  const [cardsData, setCardsList] = useState(mockList)

  const saveNewCard = (frontText: string, backText: string) => {
    setCardsList([
      ...cardsData,
      { front: frontText, back: backText, id: 'RandomID' },
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
      <CardComponent front="Lorem ipsum" back="Jhon Doe" />{' '}
      {/* tfw this component imitate rendered Card List */}
    </AppContainer>
  )
}
export default App
