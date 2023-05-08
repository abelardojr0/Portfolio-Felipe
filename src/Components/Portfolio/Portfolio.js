import React from "react";
import {
  PorfolioComponent,
  PortfolioCarousel,
  PortfolioTexto,
  PortfolioTitulo,
} from "./PortfolioStyles";
import { TituloColorido } from "../../GlobalStyles";
import Carousel from "better-react-carousel";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";

const Portfolio = () => {
  const [modalAberto1, setModalAberto1] = React.useState(false);
  const [modalAberto2, setModalAberto2] = React.useState(false);
  const [modalAberto3, setModalAberto3] = React.useState(false);
  const [modalAberto4, setModalAberto4] = React.useState(false);
  const [modalAberto5, setModalAberto5] = React.useState(false);
  const [modalAberto6, setModalAberto6] = React.useState(false);

  const MyDot = ({ isActive }) => (
    <span
      style={{
        marginTop: "30px",
        display: "inline-block",
        height: isActive ? "22px" : "14px",
        width: isActive ? "22px" : "14px",
        background: isActive ? "#00f3ff" : "#313131",
        borderRadius: "50%",
      }}
    ></span>
  );

  const abrirModal1 = () => {
    setModalAberto1(true);
  };
  const abrirModal2 = () => {
    setModalAberto2(true);
  };
  const abrirModal3 = () => {
    setModalAberto3(true);
  };
  const abrirModal4 = () => {
    setModalAberto4(true);
  };
  const abrirModal5 = () => {
    setModalAberto5(true);
  };
  const abrirModal6 = () => {
    setModalAberto6(true);
  };
  const fecharModal = (e) => {
    if (
      e.target.getAttribute("id") === "modal" ||
      e.target.getAttribute("id") === "fechar"
    ) {
      setModalAberto1(false);
      setModalAberto2(false);
      setModalAberto3(false);
      setModalAberto4(false);
      setModalAberto5(false);
      setModalAberto6(false);
    }
  };
  return (
    <>
      <PorfolioComponent id="portfolio">
        <TituloColorido>Portfólio</TituloColorido>
        <PortfolioTitulo>Confira alguns dos meus projetos</PortfolioTitulo>
        <PortfolioTexto>
          Agora que já sabe um pouco sobre mim, gostaria de apresentar alguns
          dos projetos nos quais trabalhei. Por favor, sinta-se livre para
          analisá-los e caso tenha alguma dúvida, sugestão ou apenas queira
          trocar uma ideia sobre algum deles, não hesite em entrar em contato
          comigo!
        </PortfolioTexto>
        <PortfolioCarousel>
          <Carousel
            cols={3}
            rows={1}
            gap={"30px"}
            loop
            showDots={true}
            dot={MyDot}
          >
            <Carousel.Item>
              <Card
                titulo={"Data Science Project"}
                imagem={1}
                tituloOver={
                  "National Institute of Diabetes and Digestive and Kidney Diseases"
                }
                subtituloOver={"Big Data Analytics & Machine Learning"}
                abrirModal={abrirModal1}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Card
                titulo={"Data Science Project"}
                imagem={2}
                tituloOver={"Customer Churn in Telecom Operators"}
                subtituloOver={"Big Data Analytics & Machine Learning"}
                abrirModal={abrirModal2}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Card
                titulo={"Data Science Project"}
                imagem={3}
                tituloOver={"Santander Customer Satisfaction"}
                subtituloOver={"Big Data Analytics & Machine Learning"}
                abrirModal={abrirModal3}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Card
                titulo={"Data Science Project"}
                imagem={4}
                tituloOver={"Netflix Investor: Quarterly Earnings"}
                subtituloOver={"Big Data Analytics & Machine Learning"}
                abrirModal={abrirModal4}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Card
                titulo={"Data Science Project"}
                imagem={5}
                tituloOver={"Warm Up: Predict Blood Donations"}
                subtituloOver={"Big Data Analytics & Machine Learning"}
                abrirModal={abrirModal5}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Card
                titulo={"Data Science Project"}
                imagem={6}
                tituloOver={"TalkingData AdTracking Fraud Detection Challenge"}
                subtituloOver={"Big Data Analytics & Machine Learning"}
                abrirModal={abrirModal6}
              />
            </Carousel.Item>
          </Carousel>
        </PortfolioCarousel>
      </PorfolioComponent>
      <Modal
        isOpen={modalAberto1}
        onClose={fecharModal}
        imagem={1}
        titulo={
          "National Institute of Diabetes and Digestive and Kidney Diseases"
        }
        descricao={
          "Neste projeto, iremos utilizar a linguagem Python, para prever com base em medidas de diagnóstico, se um paciente tem diabetes."
        }
        area={"BIG DATA ANALYTICS & MACHINE LEARNING"}
      />
      <Modal
        isOpen={modalAberto2}
        onClose={fecharModal}
        imagem={2}
        titulo={"Customer Churn in Telecom Operators"}
        descricao={
          "Neste projeto, iremos utilizar a linguagem Python, para criar um modelo de aprendizagem de máquina que possa prever se um cliente pode ou não cancelar seu plano, e qual a probabilidade disso ocorrer."
        }
        area={"BIG DATA ANALYTICS & MACHINE LEARNING"}
      />
      <Modal
        isOpen={modalAberto3}
        onClose={fecharModal}
        imagem={3}
        titulo={"Santander Customer Satisfaction"}
        descricao={
          "Neste projeto, vamos utilizar a linguagem Python, para criar um modelo de aprendizagem de máquina que possa prever se um cliente está ou não satisfeito com sua experiência bancária."
        }
        area={"BIG DATA ANALYTICS & MACHINE LEARNING"}
      />
      <Modal
        isOpen={modalAberto4}
        onClose={fecharModal}
        imagem={4}
        titulo={"Netflix Investor: Quarterly Earnings"}
        descricao={
          "Neste projeto, vamos utilizar a linguagem R para preparar um resumo estatístico dos dados da empresa Netflix, demonstrando sua saúde financeira e outras informações relevantes, que poderão ajudar potenciais investidores a decidir sobre investir ou não na companhia."
        }
        area={"BIG DATA ANALYTICS & MACHINE LEARNING"}
      />
      <Modal
        isOpen={modalAberto5}
        onClose={fecharModal}
        imagem={5}
        titulo={"Warm Up: Predict Blood Donations"}
        descricao={
          "Neste projeto de aprendizado de máquina, estamos interessados ​​em utilizar a linguagem R para prever se um doador de sangue doará dentro de uma determinada janela de tempo. O objetivo é prever os valores da última coluna (Made Donation in March 2007), para deterimnar se ele / ela doou sangue em março de 2007."
        }
        area={"BIG DATA ANALYTICS & MACHINE LEARNING"}
      />
      <Modal
        isOpen={modalAberto6}
        onClose={fecharModal}
        imagem={6}
        titulo={"TalkingData AdTracking Fraud Detection Challenge"}
        descricao={
          "Neste projeto, construímos um modelo de aprendizado de máquina para determinar se um clique em um anúncio online é fraudulento ou não."
        }
        area={"BIG DATA ANALYTICS & MACHINE LEARNING"}
      />
    </>
  );
};

export default Portfolio;
