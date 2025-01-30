import styled from "styled-components";
import TituloH1Estilizado from "../components/TituloH1";
import TituloH3Estilizado from "../components/TituloH3";

const FavoritosEstilizado = styled.div``;

const Favoritos = () => {
  return (
    <FavoritosEstilizado>
      <TituloH1Estilizado>
        acompanhe tudo sobre seus times favoritos
      </TituloH1Estilizado>
      <TituloH3Estilizado>e não perca nenhum update</TituloH3Estilizado>
    </FavoritosEstilizado>
  );
};

export default Favoritos;
