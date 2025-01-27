import { useEffect, useState } from "react";
import styled from "styled-components";

const CardEstilizado = styled.div`
  background-color: #ffffff;
  width: 250px; /* Largura ajustada para acomodar a imagem */
  height: 200px; /* Altura proporcional à largura */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center; /* Distribui espaço interno */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 120px; /* Largura fixa */
    height: 120px; /* Altura fixa */
    margin-bottom: 15px;
    object-fit: contain; /* Garante que a imagem seja cortada proporcionalmente */
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin: 0;
    text-align: center;
  }
`;

const CardEstilizadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  background-color: #f5f5f5;
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
