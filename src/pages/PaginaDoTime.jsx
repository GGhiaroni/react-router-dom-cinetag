import { useParams } from "react-router-dom";
import styled from "styled-components";
import listaDeTimes from "../../public/json/db.json";
import Banner from "../components/Banner";
import TituloH1Estilizado from "../components/TituloH1";
import TituloH3Estilizado from "../components/TituloH3";

const PaginaDoTimeEstilizado = styled.div`
  font-family: "Poppins";
`;

const ContainerLocalidade = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    width: 30px;
  }
`;

const PaginaDoTime = () => {
  const parametro = useParams();

  const timeEncontrado = listaDeTimes.find(
    (time) => time.id === Number(parametro.id)
  );

  return (
    <PaginaDoTimeEstilizado>
      <Banner />
      <TituloH1Estilizado>{timeEncontrado.nome}</TituloH1Estilizado>
      <ContainerLocalidade>
        <TituloH3Estilizado>
          📍{timeEncontrado.cidade}, {timeEncontrado.país}
        </TituloH3Estilizado>
        <img src={timeEncontrado.bandeira_pais} />
      </ContainerLocalidade>
      👥{" "}
      {timeEncontrado.numero_aproximado_de_torcedores.toLocaleString("pt-BR")}{" "}
      torcedores
    </PaginaDoTimeEstilizado>
  );
};

export default PaginaDoTime;
