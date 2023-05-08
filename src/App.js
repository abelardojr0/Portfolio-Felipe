import "./App.css";
import Apresentacao from "./Components/Apresentacao/Apresentacao";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Portfolio from "./Components/Portfolio/Portfolio";
import Resumo from "./Components/Resumo/Resumo";
import Servicos from "./Components/Serviços/Servicos";
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
      <Portfolio />
      <Servicos />
      <Footer />
    </>
  );
}

export default App;
