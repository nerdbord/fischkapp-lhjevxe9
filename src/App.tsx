import { useState } from 'react'
import { AppContainer } from './components/AppContainer'
import { AppHeader } from './components/AppHeader'
import { CardComponent } from './components/CardComponent'
import { NewCard } from './components/NewCard'

function App() {
  const [cardsData, setCardsList] = useState([
    { front: 'Jon Doe', back: 'Lorem ipsum', id: '1' },
    { front: 'Bigos', back: 'Dobry jest', id: '1a3' },
    { front: 'Serniczka', back: 'Zawsze zjem', id: '12' },
  ])
  const [isListView, setIsListView] = useState(true)

  const saveNewCard = (frontText: string, backText: string) => {
    setCardsList((prevState) => [
      ...prevState,
      { front: frontText, back: backText, id: 'RandomID' },
    ])
    setIsListView(true)
  }

  return (
    <AppContainer>
      <AppHeader
        onAddCard={() => {
          setIsListView(false)
        }}
        cardsAmount={0}
      />
      {!isListView ? (
        <NewCard
          handleCancelBtn={() => setIsListView(true)}
          handleSaveBtn={saveNewCard}
        />
      ) : (
        <CardComponent front="Lorem ipsum" back="Jhon Doe" />
      )}
    </AppContainer>
  )
}

export default App
