import { ClimaProvider } from "./Context/ClimaProvider";
import ClimaApp from "./components/ClimaApp";
import Header from "./components/Header";

function App() {

  return (
    <ClimaProvider>
      <Header />

      <ClimaApp />
    </ClimaProvider>

  )
}

export default App
