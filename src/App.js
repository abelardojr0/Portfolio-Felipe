import "./App.css";
import Apresentacao from "./Components/Apresentacao/Apresentacao";
import Header from "./Components/Header/Header";
import Resumo from "./Components/Resumo/Resumo";
import Sobre from "./Components/Sobre/Sobre";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Apresentacao />
      <Sobre />
      <Resumo />
    </>
  );
}

export default App;
