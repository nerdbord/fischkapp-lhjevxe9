import { AppContainer } from './components/AppContainer'
import { AppHeader } from './components/AppHeader'
import { CardComponent } from './components/CardComponent'
import { NewCard } from './components/NewCard'

function App() {
  return (
    <AppContainer>
      <AppHeader onAddCard={() => {}} cardsAmount={0} />
      <NewCard />
      {/* <CardComponent front="Lorem ipsum" back="Jhon Doe" /> */}
    </AppContainer>
  )
}

export default App
