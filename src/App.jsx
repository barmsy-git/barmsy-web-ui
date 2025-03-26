import AppRouter from "./Router"
import { GlobalStateProvider } from "./context/GlobalStateProvider";
function App(){
  return(
    <GlobalStateProvider>
      <AppRouter />
    </GlobalStateProvider>
  )
}

export default App