import styled from "styled-components";
import listaTimes from "../../../../public/json/db.json";
import TituloH1Estilizado from "../../TituloH1";
import CardTime from "../CardTime";

const CardEstilizadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  border-radius: 20px;
  width: 1200px;
  margin: 20px auto;
`;

const ListaTimes = () => {
  return (
    <>
      <TituloH1Estilizado>equipes em alta</TituloH1Estilizado>
      <CardEstilizadoContainer>
        {listaTimes.map((time) => (
          <CardTime key={time.id} time={time} />
        ))}
      </CardEstilizadoContainer>
    </>
  );
};

export default ListaTimes;
