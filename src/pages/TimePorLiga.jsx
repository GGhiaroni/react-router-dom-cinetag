import { useParams } from "react-router-dom";
import styled from "styled-components";
import listaDeTimes from "../../public/json/db.json";
import Banner from "../components/Banner";
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

const CardTime = styled.div`
  background: #fff;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
    width: 20px;
  }
  h1 {
    font-size: 50px;
    position: relative;
    text-align: center;

    &::after {
      content: "";
      display: block;
      width: 60%;
      height: 4px;
      background-color: #000000;
      margin: 8px auto 0;
    }
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
        <TituloH1Estilizado style={{ fontSize: "50px" }}>
          {times[0].país}
        </TituloH1Estilizado>
      </TituloEBandeira>
    </TimePorLigaEstilizado>
  );
};

export default TimePorLiga;
