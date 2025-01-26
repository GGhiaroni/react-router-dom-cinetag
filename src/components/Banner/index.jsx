import styled from "styled-components";

const BannerEstilizado = styled.div`
  width: 100%;
  height: 300px;
  background-image: url("/imagens/banner-home.png");
  background-size: cover; /* Faz o ajuste automático */
  background-position: center; /* Centraliza o conteúdo */
`;
const Banner = () => {
  return <BannerEstilizado />;
};

export default Banner;
