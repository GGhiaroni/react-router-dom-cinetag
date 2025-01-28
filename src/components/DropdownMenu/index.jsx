import { useEffect, useState } from "react";
import styled from "styled-components";
import times from "/public/json/db.json";

const DropdownMenuEstilizado = styled.ul``;

const DropdownMenu = () => {
  const [ligas, setLigas] = useState([]);

  useEffect(() => {
    const paises = Array.from(new Set(times.map((time) => time.país)));
    setLigas(paises);
  }, []);

  return (
    <DropdownMenuEstilizado>
      {ligas.map((liga) => (
        <li key={liga}>{liga}</li>
      ))}
    </DropdownMenuEstilizado>
  );
};

export default DropdownMenu;
