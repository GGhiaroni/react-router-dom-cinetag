import styled from "styled-components";

const FooterEstilizado = styled.footer`
  background-color: var(--preto);
  text-align: center;
  padding: 1rem 0;
  h2 {
    color: white;
    font-size: 16px;
  }
`;

const Footer = () => {
  return (
    <FooterEstilizado>
      <h2>© Team Heritage 2025. Todos os direitos reservados.</h2>
    </FooterEstilizado>
  );
};

export default Footer;
