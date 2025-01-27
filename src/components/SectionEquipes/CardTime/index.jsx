import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import styled from "styled-components";

const CardEstilizado = styled.div`
  background-color: #ffffff;
  width: 250px;
  height: 250px;
  padding: 0;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 120px;
    height: 120px;
    margin-top: 15px;
    object-fit: contain;
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
    margin-top: 15px;
    padding: 10px 0;
    background-color: #333;
    width: 100%;
  }
`;

const CardFooter = styled.div`
  background-color: #f8f8f8;
  padding: 10px 15px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-top: 1px solid #ddd;

  button {
    background-color: transparent;
    border: none;
    font-size: 14px;
    font-weight: 600;
    color: #007bff;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
      color: #0056b3;
    }
  }

  .heart-icon {
    color: #d11919;
    font-size: 18px;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
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
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    fetch("/json/db.json")
      .then((response) => response.json())
      .then((data) => setTimes(data))
      .catch((error) => console.error("Erro ao carregar o JSON:", error));
  }, []);

  const toggleFavorito = (id) => {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((fav) => fav !== id));
    } else {
      setFavoritos([...favoritos, id]);
    }
  };

  return (
    <CardEstilizadoContainer>
      {times.map((time) => (
        <CardEstilizado key={time.id}>
          <img src={time.foto_escudo} alt={`escudo ${time.nome}`} />
          <h3>{time.nome}</h3>
          <CardFooter>
            <FaHeart
              className="heart-icon"
              onClick={() => toggleFavorito(time.id)}
              style={{
                color: favoritos.includes(time.id) ? "#cf2626" : "#ddd",
              }}
            />
            <button>
              Saiba mais <IoIosArrowRoundForward />
            </button>
          </CardFooter>
        </CardEstilizado>
      ))}
    </CardEstilizadoContainer>
  );
};

export default CardTime;
