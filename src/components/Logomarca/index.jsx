import styled from "styled-components";

const LogomarcaEstilizada = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 150px;
  img {
    max-width: 40px;
  }
  h2 {
    color: #ffffff;
    font-size: 1rem;
  }
`;
const Logomarca = () => {
  return (
    <LogomarcaEstilizada>
      <img src="/imagens/icone-leao-white.png" alt="icone leão branco" />
      <h2>TEAM HERITAGE</h2>
    </LogomarcaEstilizada>
  );
};

export default Logomarca;
