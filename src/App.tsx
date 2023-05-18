import { AppContainer } from './components/AppContainer'
import { AppHeader } from './components/AppHeader'
import { CardComponent } from './components/CardComponent'

function App() {
  return (
    <AppContainer>
      <AppHeader onAddCard={() => {}} cardsAmount={0} />
    </AppContainer>
  )
}

export default App
