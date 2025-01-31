import styled from "styled-components";
import CardTime from "../components/SectionEquipes/CardTime";
import TituloH1Estilizado from "../components/TituloH1";
import TituloH3Estilizado from "../components/TituloH3";
import useFavoritoContext from "../hooks/useFavoritos";

const FavoritosEstilizado = styled.div``;

const CardEstilizadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px 5px;
  background-color: #f5f5f5;
  border-radius: 10px;
`;

const Favoritos = () => {
  const { favorito } = useFavoritoContext();

  return (
    <FavoritosEstilizado>
      <TituloH1Estilizado>
        acompanhe tudo sobre seus times favoritos
      </TituloH1Estilizado>
      <TituloH3Estilizado>e não perca nenhum update</TituloH3Estilizado>

      <CardEstilizadoContainer>
        {favorito.length === 0 ? (
          <p>Você ainda não tem times favoritos.</p>
        ) : (
          favorito.map((time) => <CardTime key={time.id} time={time} />)
        )}
      </CardEstilizadoContainer>
    </FavoritosEstilizado>
  );
};

export default Favoritos;
