import React from "react";
import {
  ResumoCarousel,
  ResumoComponent,
  ResumoTexto,
  ResumoTitulo,
  ResumoTituloColorido,
} from "./ResumoStyles";
import { TituloColorido } from "../../GlobalStyles";
import Grade from "../Grade/Grade";
import Carousel from "better-react-carousel";

const Resumo = () => {
  const MyDot = ({ isActive }) => (
    <span
      style={{
        marginTop: "30px",
        marginBottom: "60px",
        display: "inline-block",
        height: isActive ? "22px" : "14px",
        width: isActive ? "22px" : "14px",
        background: isActive ? "#00f3ff" : "#313131",
        borderRadius: "50%",
      }}
    ></span>
  );
  return (
    <ResumoComponent id="resumo">
      <TituloColorido>Resumo</TituloColorido>
      <ResumoTitulo>Minhas Credênciais</ResumoTitulo>
      <ResumoTexto>
        Estes são os principais pontos de ganho de experiência e títulos que
        obtive durante minha jornada até hoje...
      </ResumoTexto>
      <ResumoTituloColorido>Experiência</ResumoTituloColorido>
      <ResumoCarousel>
        <Carousel
          cols={1}
          rows={1}
          gap={10}
          loop
          showDots={true}
          dot={MyDot}
          mobileBreakpoint={0}
        >
          <Carousel.Item>
            <Grade
              titulo1={"Let's Code"}
              subtitulo={"Junho, 2022 - Atual"}
              imagem={"1"}
              titulo2={"Professor Docente"}
              texto={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
            />
          </Carousel.Item>
          <Carousel.Item>
            <Grade
              titulo1={"Teste"}
              subtitulo={"Junho, 2022 - Atual"}
              imagem={"2"}
              titulo2={"Professor Docente"}
              texto={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
            />
          </Carousel.Item>
        </Carousel>
      </ResumoCarousel>
      <ResumoTituloColorido>Cursos</ResumoTituloColorido>
      <ResumoCarousel>
        <Carousel
          cols={1}
          rows={1}
          gap={10}
          loop
          showDots={true}
          dot={MyDot}
          mobileBreakpoint={0}
        >
          <Carousel.Item>
            <Grade
              titulo1={"Let's Code"}
              subtitulo={"Junho, 2022 - Atual"}
              imagem={"3"}
              titulo2={"Professor Docente"}
              texto={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
            />
          </Carousel.Item>
          <Carousel.Item>
            <Grade
              titulo1={"Teste"}
              subtitulo={"Junho, 2022 - Atual"}
              imagem={"4"}
              titulo2={"Professor Docente"}
              texto={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
            />
          </Carousel.Item>
        </Carousel>
      </ResumoCarousel>

      <ResumoTituloColorido>Formações Academicas</ResumoTituloColorido>
      <ResumoCarousel>
        <Carousel
          cols={1}
          rows={1}
          gap={10}
          loop
          showDots={true}
          dot={MyDot}
          mobileBreakpoint={0}
        >
          <Carousel.Item>
            <Grade
              titulo1={"Let's Code"}
              subtitulo={"Junho, 2022 - Atual"}
              imagem={"1"}
              titulo2={"Professor Docente"}
              texto={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
            />
          </Carousel.Item>
          <Carousel.Item>
            <Grade
              titulo1={"Teste"}
              subtitulo={"Junho, 2022 - Atual"}
              imagem={"2"}
              titulo2={"Professor Docente"}
              texto={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
            />
          </Carousel.Item>
        </Carousel>
      </ResumoCarousel>

      <ResumoTituloColorido>Outras Formações</ResumoTituloColorido>
      <ResumoCarousel>
        <Carousel
          cols={1}
          rows={1}
          gap={10}
          loop
          showDots={true}
          dot={MyDot}
          mobileBreakpoint={0}
        >
          <Carousel.Item>
            <Grade
              titulo1={"Let's Code"}
              subtitulo={"Junho, 2022 - Atual"}
              imagem={"1"}
              titulo2={"Professor Docente"}
              texto={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
            />
          </Carousel.Item>
          <Carousel.Item>
            <Grade
              titulo1={"Teste"}
              subtitulo={"Junho, 2022 - Atual"}
              imagem={"2"}
              titulo2={"Professor Docente"}
              texto={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
            />
          </Carousel.Item>
        </Carousel>
      </ResumoCarousel>

      <ResumoTituloColorido>
        Premiações & Participações Especiais
      </ResumoTituloColorido>
      <ResumoCarousel>
        <Carousel
          cols={1}
          rows={1}
          gap={10}
          loop
          showDots={true}
          dot={MyDot}
          mobileBreakpoint={0}
        >
          <Carousel.Item>
            <Grade
              titulo1={"Let's Code"}
              subtitulo={"Junho, 2022 - Atual"}
              imagem={"1"}
              titulo2={"Professor Docente"}
              texto={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
            />
          </Carousel.Item>
          <Carousel.Item>
            <Grade
              titulo1={"Teste"}
              subtitulo={"Junho, 2022 - Atual"}
              imagem={"2"}
              titulo2={"Professor Docente"}
              texto={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
            />
          </Carousel.Item>
        </Carousel>
      </ResumoCarousel>
    </ResumoComponent>
  );
};

export default Resumo;
