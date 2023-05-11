import { AppContainer } from "./components/AppContainer";
import { AppHeader } from "./components/AppHeader";

function App() {
  return (
    <AppContainer>
      <AppHeader onAddCard={() => {}} cardsAmount={0} />
    </AppContainer>
  );
}

export default App;
