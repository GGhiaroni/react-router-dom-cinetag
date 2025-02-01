import { useParams } from "react-router-dom";
import styled from "styled-components";
import listaDeTimes from "../../public/json/db.json";
import Banner from "../components/Banner";
import CardTime from "../components/SectionEquipes/CardTime";
import TituloH1Estilizado from "../components/TituloH1";

const TimePorLigaEstilizado = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  min-height: 100vh;
  padding-bottom: 20px;
`;

const ContainerTimes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const EscudoTime = styled.img`
  width: 100px;
  object-fit: contain;
  margin-bottom: 10px;
`;

const InfoTexto = styled.p`
  font-size: 16px;
  color: #333;
  font-weight: 500;
  margin: 5px 0;
`;

const Icon = styled.span`
  font-size: 20px;
`;

const TituloEBandeira = styled.div`
  display: flex;
  gap: 15px;
  margin: 50px auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  img {
    width: 30px;
  }

  h1 {
    font-size: 50px;
    position: relative;
    text-align: center;
  }

  h1 span {
    position: relative;
    display: inline-block;
  }

  h1 span::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 20px;
    height: 4px;
    background-color: #000;
  }
`;

const TimePorLiga = () => {
  const parametro = useParams();
  const times = listaDeTimes.filter(
    (time) => time.país.toLowerCase() === parametro.liga
  );

  return (
    <TimePorLigaEstilizado>
      <Banner />
      <TituloEBandeira>
        <img src={times[0].bandeira_pais} />
        <TituloH1Estilizado>
          <span>{times[0].país.charAt(0)}</span>
          {times[0].país.slice(1)}
        </TituloH1Estilizado>
      </TituloEBandeira>
      <ContainerTimes>
        {times.map((time) => (
          <CardTime key={time.id} time={time} />
        ))}
      </ContainerTimes>
    </TimePorLigaEstilizado>
  );
};

export default TimePorLiga;
