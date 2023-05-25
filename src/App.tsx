import { AppContainer } from './components/AppContainer'
import { AppHeader } from './components/AppHeader'
import { NewCard } from './components/NewCard'

function App() {
  return (
    <AppContainer>
      <AppHeader onAddCard={() => {}} cardsAmount={0} />
      <NewCard />
    </AppContainer>
  )
}

export default App
