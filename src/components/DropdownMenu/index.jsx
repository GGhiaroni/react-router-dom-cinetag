import { useEffect, useState } from "react";
import styled from "styled-components";
import times from "/public/json/db.json";

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: transparent;
  font-family: "Montserrat";
  color: var(--branco);
  font-size: 18px;
  font-weight: 400;
  padding: 1rem;
  border: none;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const DropdownMenuEstilizado = styled.ul`
  position: absolute;
  top: 120%;
  left: 0;
  background-color: var(--preto);
  border-radius: 8px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  list-style: none;
  padding: 0;
  margin: 0;
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transform: ${(props) =>
    props.isOpen ? "translateY(0) scale(1)" : "translateY(-10px) scale(0.95)"};
  transform-origin: top;
  transition: all 0.3s ease-in-out;
  z-index: 10;
`;

const DropdownMenuItem = styled.li`
  padding: 1rem;
  font-size: 18px;
  font-weight: 400;
  color: var(--branco);
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const DropdownMenu = () => {
  const [ligas, setLigas] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((estadoAnterior) => !estadoAnterior);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  useEffect(() => {
    const paises = Array.from(new Set(times.map((time) => time.país)));
    setLigas(paises);
  }, []);

  return (
    <DropdownContainer>
      <DropdownButton
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={toggleDropdown}
      >
        Ligas
      </DropdownButton>
      <DropdownMenuEstilizado isOpen={isOpen}>
        {ligas.map((liga) => (
          <DropdownMenuItem key={liga}>{liga}</DropdownMenuItem>
        ))}
      </DropdownMenuEstilizado>
    </DropdownContainer>
  );
};

export default DropdownMenu;
