import { useEffect, useState } from "react";
import styled from "styled-components";

const CardEstilizado = styled.div`
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
  max-width: 200px;
  img {
    max-width: 130px;
  }
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
    <CardEstilizado>
      {times.map((time) => (
        <div>
          <img src={time.foto_escudo} alt={`escudo ${time.nome}`} />
          <p key={time.id}>{time.nome}</p>
        </div>
      ))}
    </CardEstilizado>
  );
};

export default CardTime;
