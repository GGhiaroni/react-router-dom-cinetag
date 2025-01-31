import styled from "styled-components";
import listaTimes from "../../../../public/json/db.json";
import CardTime from "../CardTime"; // Agora só importa o CardTime

const CardEstilizadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px 5px;
  background-color: #f5f5f5;
  border-radius: 10px;
`;

const ListaTimes = () => {
  return (
    <CardEstilizadoContainer>
      {listaTimes.map((time) => (
        <CardTime key={time.id} time={time} />
      ))}
    </CardEstilizadoContainer>
  );
};

export default ListaTimes;
