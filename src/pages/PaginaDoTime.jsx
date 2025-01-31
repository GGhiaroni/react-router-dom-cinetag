import { useParams } from "react-router-dom";
import styled from "styled-components";
import listaDeTimes from "../../public/json/db.json";
import Banner from "../components/Banner";
import TituloH1Estilizado from "../components/TituloH1";

const PaginaDoTimeEstilizado = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const ContainerEscudo = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

const EscudoTime = styled.img`
  width: 120px;
  object-fit: contain;
`;

const InfoCard = styled.div`
  background: #fff;
  width: 90%;
  max-width: 500px;
  padding: 20px;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Icon = styled.span`
  font-size: 24px;
`;

const TextoInfo = styled.p`
  font-size: 18px;
  color: #333;
  font-weight: 500;
  margin: 0;
`;

const ContainerLocalidade = styled(InfoCard)`
  margin-top: 32px;
`;

const Bandeira = styled.img`
  width: 35px;
`;

const PaginaDoTime = () => {
  const parametro = useParams();
  const timeEncontrado = listaDeTimes.find(
    (time) => time.id === Number(parametro.id)
  );

  const Label = styled.span`
    font-weight: 700;
    font-size: 18px;
    color: ${timeEncontrado.corPrincipal};
  `;

  return (
    <PaginaDoTimeEstilizado>
      <Banner />
      <ContainerEscudo>
        <EscudoTime
          src={timeEncontrado.foto_escudo}
          alt={`Escudo do ${timeEncontrado.nome}`}
        />
      </ContainerEscudo>
      <TituloH1Estilizado>{timeEncontrado.nome}</TituloH1Estilizado>

      <ContainerLocalidade>
        <Icon>📍</Icon>
        <TextoInfo>
          <Label>Local: </Label>
          {timeEncontrado.cidade}, {timeEncontrado.país}
        </TextoInfo>
        <Bandeira
          src={timeEncontrado.bandeira_pais}
          alt={`Bandeira de ${timeEncontrado.país}`}
        />
      </ContainerLocalidade>

      <InfoCard>
        <Icon>🏟️</Icon>
        <TextoInfo>
          <Label>Estádio:</Label> {timeEncontrado.estadio}
        </TextoInfo>
      </InfoCard>
      <InfoCard>
        <Icon>👥</Icon>
        <TextoInfo>
          <Label>Torcedores:</Label>{" "}
          {timeEncontrado.numero_aproximado_de_torcedores.toLocaleString(
            "pt-BR"
          )}
        </TextoInfo>
      </InfoCard>
      <InfoCard>
        <Icon>🏷️</Icon>
        <TextoInfo>
          <Label>Apelido:</Label> {timeEncontrado.apelido}
        </TextoInfo>
      </InfoCard>
      <InfoCard>
        <Icon>⚔️</Icon>
        <TextoInfo>
          <Label>Principal rival:</Label> {timeEncontrado.principal_rival}
        </TextoInfo>
      </InfoCard>
    </PaginaDoTimeEstilizado>
  );
};

export default PaginaDoTime;
