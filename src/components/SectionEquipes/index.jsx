import styled from "styled-components";
import TituloH1Estilizado from "../TituloH1";
import CardTime from "./CardTime";

const SectionEquipesEstilizado = styled.section`
  padding: 50px 30px;
  border-radius: 20px;
`;

const SectionEquipes = () => {
  return (
    <>
      <TituloH1Estilizado>equipes em alta</TituloH1Estilizado>
      <SectionEquipesEstilizado>
        <CardTime />
      </SectionEquipesEstilizado>
    </>
  );
};
export default SectionEquipes;
