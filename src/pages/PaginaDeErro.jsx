import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import imagem2 from "../../public/imagens/pagina-erro-2.png";
import TituloH1Estilizado from "../components/TituloH1";
import TituloH3Estilizado from "../components/TituloH3";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const PaginaDeErroEstilizado = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  background: linear-gradient(135deg, #0e416d, #a0aaf2);
  color: #fff;
  padding: 20px;
`;

const ErroNumero = styled.h1`
  font-size: 150px;
  font-weight: bold;
  margin: 0;
  animation: ${pulse} 2s infinite;
  text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
`;

const ImagemErro = styled.img`
  max-width: 70%;
  width: 400px;
  margin: 20px 0;
  opacity: 0.9;
  filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.2));
`;

const TextoErro = styled.div`
  max-width: 600px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const BotaoVoltar = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 14px 28px;
  font-size: 18px;
  font-weight: bold;
  color: #007bff;
  background-color: #fff;
  border-radius: 50px;
  text-decoration: none;
  transition: 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #ffecec;
    transform: translateY(-3px);
  }
`;

const PaginaDeErro = () => {
  return (
    <PaginaDeErroEstilizado>
      <ErroNumero>404</ErroNumero>
      <TextoErro>
        <TituloH1Estilizado>Oops! Algo deu errado.</TituloH1Estilizado>
        <TituloH3Estilizado>
          Não conseguimos encontrar a página que você procura.
        </TituloH3Estilizado>
        <BotaoVoltar to="/">Voltar para a Página Inicial</BotaoVoltar>
      </TextoErro>
      <ImagemErro src={imagem2} alt="Imagem de erro" />
    </PaginaDeErroEstilizado>
  );
};

export default PaginaDeErro;
