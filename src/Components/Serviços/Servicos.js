import React from "react";
import {
  ServicoCard,
  ServicoCardTexto,
  ServicoCardTitulo,
  ServicoFaixa,
  ServicoFaixaItem,
  ServicoFaixaItemUltimo,
  ServicoFaixaTexto,
  ServicoFaixaTitulo,
  ServicoTexto,
  ServicoTitulo,
  ServicosCarousel,
  ServicosComponent,
  ServicosParaNavegacao,
  ServicosPelicula,
} from "./ServicosStyles";
import { TituloColorido } from "../../GlobalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlassChart,
  faChartLine,
  faChartSimple,
  faWrench,
  faCommentsDollar,
  faWaveSquare,
  faFilePen,
  faListCheck,
  faBrain,
  faLightbulb,
  faMugSaucer,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import Carousel from "better-react-carousel";
const Servicos = () => {
  const MyDot = ({ isActive }) => (
    <span
      style={{
        marginTop: "40px",
        display: "inline-block",
        height: isActive ? "22px" : "14px",
        width: isActive ? "22px" : "14px",
        background: isActive ? "#00f3ff" : "#313131",
        borderRadius: "50%",
      }}
    ></span>
  );
  const useNumeroCrescente = (valorInicial, valorMaximo) => {
    const [numero, setNumero] = React.useState(valorInicial);

    const tituloRef = React.useRef(null);

    React.useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          let count = valorInicial;
          const intervalId = setInterval(() => {
            if (count < valorMaximo) {
              count++;
              setNumero(count);
            } else {
              clearInterval(intervalId);
            }
          }, 10);
        }
      });
      observer.observe(tituloRef.current);
    }, [valorInicial, valorMaximo]);

    return [numero, tituloRef];
  };

  const [numero1, tituloRef1] = useNumeroCrescente(0, 50);
  const [numero2, tituloRef2] = useNumeroCrescente(0, 10);
  const [numero3, tituloRef3] = useNumeroCrescente(0, 20);
  const [numero4, tituloRef4] = useNumeroCrescente(400, 475);
  const [numero5, tituloRef5] = useNumeroCrescente(7400, 7500);
  const [numero6, tituloRef6] = useNumeroCrescente(8900, 9000);

  const [colunas, setColunas] = React.useState(3);

  React.useEffect(() => {
    if (window.innerWidth < 1000) {
      setColunas(2);
    }
    if (window.innerWidth < 768) {
      setColunas(1);
    }
    if (window.innerWidth < 480) {
      setColunas(1);
    }
  }, []);

  return (
    <>
      <ServicosParaNavegacao id="servicos"></ServicosParaNavegacao>
      <ServicosComponent>
        <ServicosPelicula>
          <TituloColorido>Serviços</TituloColorido>
          <ServicoTitulo>O que eu posso fazer por você?</ServicoTitulo>
          <ServicoTexto>
            Estes são alguns trabalhos em que posso utilizar minhas habilidades
            para gerar soluções eficientes e eficazes em problemas que você
            possa enfrentar.
          </ServicoTexto>
          <ServicosCarousel>
            <Carousel
              cols={colunas}
              rows={1}
              gap={"60px"}
              loop
              showDots={true}
              dot={MyDot}
              mobileBreakpoint={0}
              className="carousel-portfolio"
            >
              <Carousel.Item>
                <ServicoCard>
                  <FontAwesomeIcon
                    className="servico-icon"
                    size="4x"
                    icon={faChartLine}
                  />
                  <ServicoCardTitulo>Diagnostic Analysis</ServicoCardTitulo>
                  <ServicoCardTexto>
                    Utilizar uma forma de análise avançada baseada em buscar
                    detalhadas, descoberta de dados, data mining e correlações
                    para examinar seus dados e responder à pergunta: "Por que
                    isso aconteceu?"
                  </ServicoCardTexto>
                </ServicoCard>
              </Carousel.Item>

              <Carousel.Item>
                <ServicoCard>
                  <FontAwesomeIcon
                    className="servico-icon"
                    size="4x"
                    icon={faMagnifyingGlassChart}
                  />
                  <ServicoCardTitulo>Diagnostic Analysis</ServicoCardTitulo>
                  <ServicoCardTexto>
                    Utilizar uma forma de análise avançada baseada em buscar
                    detalhadas, descoberta de dados, data mining e correlações
                    para examinar seus dados e responder à pergunta: "Por que
                    isso aconteceu?"
                  </ServicoCardTexto>
                </ServicoCard>
              </Carousel.Item>

              <Carousel.Item>
                <ServicoCard>
                  <FontAwesomeIcon
                    className="servico-icon"
                    size="4x"
                    icon={faChartSimple}
                  />
                  <ServicoCardTitulo>Diagnostic Analysis</ServicoCardTitulo>
                  <ServicoCardTexto>
                    Utilizar uma forma de análise avançada baseada em buscar
                    detalhadas, descoberta de dados, data mining e correlações
                    para examinar seus dados e responder à pergunta: "Por que
                    isso aconteceu?"
                  </ServicoCardTexto>
                </ServicoCard>
              </Carousel.Item>

              <Carousel.Item>
                <ServicoCard>
                  <FontAwesomeIcon
                    className="servico-icon"
                    size="4x"
                    icon={faWrench}
                  />
                  <ServicoCardTitulo>Diagnostic Analysis</ServicoCardTitulo>
                  <ServicoCardTexto>
                    Utilizar uma forma de análise avançada baseada em buscar
                    detalhadas, descoberta de dados, data mining e correlações
                    para examinar seus dados e responder à pergunta: "Por que
                    isso aconteceu?"
                  </ServicoCardTexto>
                </ServicoCard>
              </Carousel.Item>

              <Carousel.Item>
                <ServicoCard>
                  <FontAwesomeIcon
                    className="servico-icon"
                    size="4x"
                    icon={faCommentsDollar}
                  />
                  <ServicoCardTitulo>Diagnostic Analysis</ServicoCardTitulo>
                  <ServicoCardTexto>
                    Utilizar uma forma de análise avançada baseada em buscar
                    detalhadas, descoberta de dados, data mining e correlações
                    para examinar seus dados e responder à pergunta: "Por que
                    isso aconteceu?"
                  </ServicoCardTexto>
                </ServicoCard>
              </Carousel.Item>

              <Carousel.Item>
                <ServicoCard>
                  <FontAwesomeIcon
                    className="servico-icon"
                    size="4x"
                    icon={faWaveSquare}
                  />
                  <ServicoCardTitulo>Diagnostic Analysis</ServicoCardTitulo>
                  <ServicoCardTexto>
                    Utilizar uma forma de análise avançada baseada em buscar
                    detalhadas, descoberta de dados, data mining e correlações
                    para examinar seus dados e responder à pergunta: "Por que
                    isso aconteceu?"
                  </ServicoCardTexto>
                </ServicoCard>
              </Carousel.Item>
            </Carousel>
          </ServicosCarousel>
        </ServicosPelicula>
      </ServicosComponent>
      <ServicoFaixa>
        <ServicoFaixaItem>
          <FontAwesomeIcon
            className="servico-faixa-icon"
            size="2x"
            icon={faFilePen}
          />
          <ServicoFaixaTitulo ref={tituloRef1}>{numero1}</ServicoFaixaTitulo>
          <ServicoFaixaTexto>Projetos Completos</ServicoFaixaTexto>
        </ServicoFaixaItem>
        <ServicoFaixaItem>
          <FontAwesomeIcon
            className="servico-faixa-icon"
            size="2x"
            icon={faListCheck}
          />
          <ServicoFaixaTitulo ref={tituloRef2}>{numero2}</ServicoFaixaTitulo>
          <ServicoFaixaTexto>Projetos em Andamento</ServicoFaixaTexto>
        </ServicoFaixaItem>
        <ServicoFaixaItem>
          <FontAwesomeIcon
            className="servico-faixa-icon"
            size="2x"
            icon={faBrain}
          />
          <ServicoFaixaTitulo ref={tituloRef3}>{numero3}</ServicoFaixaTitulo>
          <ServicoFaixaTexto>Estudos em Andamento</ServicoFaixaTexto>
        </ServicoFaixaItem>
        <ServicoFaixaItem>
          <FontAwesomeIcon
            className="servico-faixa-icon"
            size="2x"
            icon={faLightbulb}
          />
          <ServicoFaixaTitulo ref={tituloRef4}>{numero4}</ServicoFaixaTitulo>
          <ServicoFaixaTexto>Ideias malucas</ServicoFaixaTexto>
        </ServicoFaixaItem>
        <ServicoFaixaItem>
          <FontAwesomeIcon
            className="servico-faixa-icon"
            size="2x"
            icon={faMugSaucer}
          />
          <ServicoFaixaTitulo ref={tituloRef5}>{numero5}</ServicoFaixaTitulo>
          <ServicoFaixaTexto>número de cafés tomados</ServicoFaixaTexto>
        </ServicoFaixaItem>
        <ServicoFaixaItemUltimo>
          <FontAwesomeIcon
            className="servico-faixa-icon"
            size="2x"
            icon={faClock}
          />
          <ServicoFaixaTitulo ref={tituloRef6}>{numero6}</ServicoFaixaTitulo>
          <ServicoFaixaTexto>Horas de trabalho</ServicoFaixaTexto>
        </ServicoFaixaItemUltimo>
      </ServicoFaixa>
    </>
  );
};

export default Servicos;
