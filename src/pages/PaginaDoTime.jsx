import { useParams } from "react-router-dom";
import listaDeTimes from "../../public/json/db.json";
import Banner from "../components/Banner";
import TituloH1Estilizado from "../components/TituloH1";

const PaginaDoTime = () => {
  const parametro = useParams();

  const timeEncontrado = listaDeTimes.find(
    (time) => time.id === Number(parametro.id)
  );

  console.log(timeEncontrado);

  return (
    <>
      <Banner />
      <TituloH1Estilizado>página de um time</TituloH1Estilizado>
    </>
  );
};

export default PaginaDoTime;
