import Logomarca from "components/Logomarca";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DropdownMenu from "../DropdownMenu";
import LinkHeader from "./LinkHeader";

const HeaderEstilizado = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 20rem;
  background-color: var(--preto);
`;

const LinkLogo = styled(Link)`
  text-decoration: none;
`;

const Header = () => {
  return (
    <HeaderEstilizado>
      <LinkLogo to="./">
        <Logomarca />
      </LinkLogo>
      <nav>
        <LinkHeader url="./">Home</LinkHeader>
        <LinkHeader url="./favoritos">Favoritos</LinkHeader>
        <DropdownMenu />
      </nav>
    </HeaderEstilizado>
  );
};

export default Header;
