import styled from "styled-components";

const FooterEstilizado = styled.footer`
  background-color: var(--preto);
  text-align: center;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    color: white;
    font-size: 16px;
  }
  img {
    margin-left: 10px;
    margin-right: 10px;
    max-width: 25px;
  }
`;

const Footer = () => {
  return (
    <FooterEstilizado>
      <h2>©</h2>
      <img src="/imagens/icone-leao-white.png" alt="icone leão branco" />
      <h2>Team Heritage 2025. Todos os direitos reservados.</h2>
    </FooterEstilizado>
  );
};

export default Footer;
