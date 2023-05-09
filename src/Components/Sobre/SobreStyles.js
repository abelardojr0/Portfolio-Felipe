import styled from "styled-components";
import responsivo, { breakpoints } from "../../Responsivo";

export const SobreComponent = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding-bottom: 100px;
  padding-top: 100px;
  ${responsivo(breakpoints.mobile)} {
    padding: 0 20px;
  }
`;

export const SobreTitulo = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 15px;
  color: #313131;
  margin-bottom: 40px;
`;

export const SobreTexto = styled.p`
  color: #888897;
  font-size: 1.2rem;
  line-height: 1.3;
  max-width: 600px;
  font-family: "Domine", serif;
  margin-bottom: 60px;
`;

export const SobreImagem = styled.img`
  max-width: 100px;
  border-radius: 50%;
  margin-bottom: 40px;
  /* position: absolute;
  top: 170px;
  left: 28%; */
`;

export const SobreInfos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

//DIVISÃO
export const SobreDivisao = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  max-width: 800px;
  ${responsivo(breakpoints.desktop)} {
    max-width: 700px;
  }
  ${responsivo(breakpoints.tablet)} {
    max-width: 450px;
    flex-direction: column;
  }
  ${responsivo(breakpoints.mobile)} {
    max-width: 300px;
    flex-direction: column;
    align-self: flex-start;
  }
`;
// PERFIL
export const SobrePerfil = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const SobrePerfilTitulo = styled.h2`
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #313131;
  margin-bottom: 20px;
  ${responsivo(breakpoints.mobile)} {
    margin-left: 20px;
  }
`;

export const SobrePerfilTexto = styled.p`
  font-size: 1.1rem;
  line-height: 1.3;
  color: #888897;
  max-width: 400px;
  margin-bottom: 20px;
  ${responsivo(breakpoints.desktop)} {
    max-width: 350px;
  }
  ${responsivo(breakpoints.mobile)} {
    margin-left: 20px;
  }
`;

export const SobrePerfilSubtitulo = styled.h3`
  font-size: 1.2rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #313131;
  font-weight: bold;
  margin-bottom: 5px;
  ${responsivo(breakpoints.mobile)} {
    margin-left: 20px;
  }
`;
export const SobrePerfilDados = styled.p`
  font-size: 1.5rem;
  color: #888897;
  ${responsivo(breakpoints.mobile)} {
    margin-left: 20px;
  }
`;

export const SobrePerfilLinguagem = styled.div`
  max-width: 450px;
  margin: 0 auto;
  ${responsivo(breakpoints.desktop)} {
    max-width: 350px;
  }
`;

//SKILLS

export const SobreSkills = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
`;
export const SobreSkillsTitulo = styled.h2`
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #313131;
  margin-bottom: 20px;
  ${responsivo(breakpoints.mobile)} {
    margin-left: 20px;
  }
`;

export const SobreSkillsTexto = styled.p`
  font-size: 1.1rem;
  line-height: 1.3;
  color: #888897;
  max-width: 400px;
  margin-bottom: 20px;
  ${responsivo(breakpoints.mobile)} {
    margin-left: 20px;
  }
`;
export const SobreSkillsOpcoes = styled.div`
  width: 400px;
  margin: 0 auto;
  ${responsivo(breakpoints.desktop)} {
    width: 350px;
  }
`;

//BOTOES

export const SobreBotoes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 60px;
  margin-bottom: 100px;
  ${responsivo(breakpoints.mobile)} {
    flex-direction: column;
  }
`;

export const SobreFaleComigo = styled.button`
  background-color: transparent;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: #313131;
  border: 3px solid #313131;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    border: 3px solid #00f3ff;
    color: #00f3ff;
  }
`;

export const SobreCurriculo = styled.button`
  background-color: #313131;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: white;
  border-radius: 5px;
  text-transform: uppercase;
  border: 3px solid #313131;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #00f3ff;
  }
`;
