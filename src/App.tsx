import { AppContainer } from './components/AppContainer'
import { AppHeader } from './components/AppHeader'
import { CardComponent } from './components/CardComponent'

function App() {
  return (
    <AppContainer>
      <AppHeader onAddCard={() => {}} cardsAmount={0} />
      <CardComponent front="Lorem ipsum" back="Jhon Doe" />
    </AppContainer>
  )
}

export default App
