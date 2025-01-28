import { useEffect } from "react";
import styled from "styled-components";
import times from "/public/json/db.json";

const DropdownMenuEstilizado = styled.ul``;

const DropdownMenu = () => {
  useEffect(() => {
    const paises = times.map((time) => time.país);
    console.log(paises);
  }, []);

  return <></>;
};

export default DropdownMenu;
