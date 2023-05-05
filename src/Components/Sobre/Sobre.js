import React from "react";
import {
  SobreBotoes,
  SobreComponent,
  SobreCurriculo,
  SobreDivisao,
  SobreFaleComigo,
  SobreImagem,
  SobrePerfil,
  SobrePerfilLinguagem,
  SobrePerfilSubtitulo,
  SobrePerfilTexto,
  SobrePerfilTitulo,
  SobreSkills,
  SobreSkillsOpcoes,
  SobreSkillsTexto,
  SobreSkillsTitulo,
  SobreTexto,
  SobreTitulo,
} from "./SobreStyles";
import { TituloColorido } from "../../GlobalStyles";
import foto from "../../Images/foto.jpg";
import Barra from "../Barra/Barra";
import Carousel from "better-react-carousel";

const Sobre = () => {
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
  return (
    <>
      <SobreComponent>
        <TituloColorido>Sobre</TituloColorido>
        <SobreTitulo>Quem sou</SobreTitulo>
        <SobreImagem src={foto} alt="foto" />
        <SobreTexto>
          Sou um amante da computação que busca explorar a capacidade de
          processamento das máquinas na extração de informações úteis de grandes
          massas de dados.
        </SobreTexto>
        <SobreTexto>
          Busco aplicar conceitos estatisticos, econométricos e de programação
          bem como técnicas de Big data analytics, Big data real-time analytics,
          Business analytics, Data engineer, A.I. e principalmente Machine
          Learning para gerar as melhores soluções para os problemas que
          envolvam Data Science e A.I.
        </SobreTexto>
        <SobreTexto>
          Ah! E não basta apenas produzir boas análises ou construir bons
          modelos preditivos se não criarmos bons gráficos (Afinal, uma imagem
          vale mais do que mil palavras, não é mesmo?) e é por isso que tenho um
          cuidado especial nas etapas de visualização de dados e design de
          dashboards para garantir que cada estudo feito possa elucidar as
          respostas que os dados podem nos fornecer para cada desafio.
        </SobreTexto>
        <SobreDivisao>
          <SobrePerfil>
            <SobrePerfilTitulo>Perfil</SobrePerfilTitulo>
            <SobrePerfilTexto>
              Sigo o conceito T-Shaped, pois acredito que a capacidade de
              produzir soluções eficazes e eficientes dependem fundamentalmente
              dos conhecimentos previamente adquiridos.
            </SobrePerfilTexto>
            <SobrePerfilSubtitulo>Nome:</SobrePerfilSubtitulo>
            <SobrePerfilTexto>Felipe Menezes</SobrePerfilTexto>
            <SobrePerfilSubtitulo>Data de Nascimento:</SobrePerfilSubtitulo>
            <SobrePerfilTexto>22 de julho, 1996</SobrePerfilTexto>
            <SobrePerfilSubtitulo>Profissão:</SobrePerfilSubtitulo>
            <SobrePerfilTexto>
              Engenheiro de dados, Cientista de dados e Arquiteto de dados
            </SobrePerfilTexto>
            <SobrePerfilLinguagem>
              <Carousel
                cols={1}
                rows={1}
                gap={10}
                loop
                showDots={true}
                dot={MyDot}
              >
                <Carousel.Item>
                  <Barra
                    base={350}
                    tamanho={95}
                    texto={"Português"}
                    nivel={"Fluente"}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Barra
                    base={350}
                    tamanho={60}
                    texto={"Inglês"}
                    nivel={"Médio"}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Barra
                    base={350}
                    tamanho={70}
                    texto={"Espanhol"}
                    nivel={"Avançado"}
                  />
                </Carousel.Item>
              </Carousel>
            </SobrePerfilLinguagem>
          </SobrePerfil>

          <SobreSkills>
            <SobreSkillsTitulo>Skills</SobreSkillsTitulo>
            <SobreSkillsTexto>
              Estes são meus níveis de habiliade com as tecnologias mais
              populares no mercado atualmente:
            </SobreSkillsTexto>
            <div style={{ marginTop: "15px" }}></div>
            <SobreSkillsOpcoes>
              <Carousel
                cols={1}
                rows={5}
                gap={10}
                loop
                showDots={true}
                dot={MyDot}
              >
                <Carousel.Item>
                  <Barra tamanho={95} texto={"Python"} nivel={"Médio"} />
                </Carousel.Item>
                <Carousel.Item>
                  <Barra tamanho={60} texto={"Power BI"} nivel={"Médio"} />
                </Carousel.Item>
                <Carousel.Item>
                  <Barra tamanho={70} texto={"Javascript"} nivel={"Médio"} />
                </Carousel.Item>
                <Carousel.Item>
                  <Barra tamanho={70} texto={"MongoDB"} nivel={"Médio"} />
                </Carousel.Item>
                <Carousel.Item>
                  <Barra tamanho={70} texto={"Azure"} nivel={"Médio"} />
                </Carousel.Item>
                <Carousel.Item>
                  <Barra tamanho={70} texto={"AWS"} nivel={"Médio"} />
                </Carousel.Item>
                <Carousel.Item>
                  <Barra tamanho={70} texto={"MySQL"} nivel={"Médio"} />
                </Carousel.Item>
                <Carousel.Item>
                  <Barra tamanho={70} texto={"MongoDB"} nivel={"Médio"} />
                </Carousel.Item>
                <Carousel.Item>
                  <Barra tamanho={70} texto={"MongoDB"} nivel={"Médio"} />
                </Carousel.Item>
                <Carousel.Item>
                  <Barra tamanho={70} texto={"MongoDB"} nivel={"Médio"} />
                </Carousel.Item>
              </Carousel>
            </SobreSkillsOpcoes>
          </SobreSkills>
        </SobreDivisao>
        <SobreBotoes>
          <SobreFaleComigo>Fale comigo</SobreFaleComigo>
          <SobreCurriculo>Baixe meu CV</SobreCurriculo>
        </SobreBotoes>
      </SobreComponent>
    </>
  );
};

export default Sobre;
