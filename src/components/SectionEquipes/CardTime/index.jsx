import { useEffect, useState } from "react";
import styled from "styled-components";

const CardEstilizado = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 15px;
  max-width: 220px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  img {
    max-width: 100px;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #333;
    margin: 0;
  }
`;

const CardEstilizadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  background-color: #f9f9f9;
`;

const CardTime = () => {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    fetch("/json/db.json")
      .then((response) => response.json())
      .then((data) => setTimes(data))
      .catch((error) => console.error("Erro ao carregar o JSON:", error));
  }, []);

  return (
    <CardEstilizadoContainer>
      {times.map((time) => (
        <CardEstilizado key={time.id}>
          <img src={time.foto_escudo} alt={`escudo ${time.nome}`} />
          <h3>{time.nome}</h3>
        </CardEstilizado>
      ))}
    </CardEstilizadoContainer>
  );
};

export default CardTime;
