import styled from "styled-components";

const TituloH1Estilizado = styled.h1`
  font-family: "Poppins";
  color: #212121;
  font-size: 36px;
  font-weight: 500;
  line-height: 1;
  margin: 0;
`;
const TituloH3Estilizado = styled.h3`
  font-family: "Poppins";
  color: #212121;
  font-size: 22px;
  font-weight: 300;
  margin-top: 10px;
  line-height: 1.4;
`;

const HeroSectionEstilizado = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const HeroSection = () => {
  return (
    <HeroSectionEstilizado>
      <HeroContent>
        <TituloH1Estilizado>tradição.</TituloH1Estilizado>
        <TituloH1Estilizado>legado.</TituloH1Estilizado>
        <TituloH1Estilizado>herança.</TituloH1Estilizado>
        <TituloH3Estilizado>
          bem-vindo ao maior hub de dados do maior esporte do mundo.
        </TituloH3Estilizado>
      </HeroContent>
    </HeroSectionEstilizado>
  );
};

export default HeroSection;
