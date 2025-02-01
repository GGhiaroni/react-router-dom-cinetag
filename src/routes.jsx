import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favoritos from "./pages/Favoritos";
import Home from "./pages/Home";
import PaginaBase from "./pages/PaginaBase";
import PaginaDeErro from "./pages/PaginaDeErro";
import PaginaDoTime from "./pages/PaginaDoTime";
import TimePorLiga from "./pages/TimePorLiga";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Home />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path="times/:id/:nome" element={<PaginaDoTime />} />
          <Route path="/times/:liga" element={<TimePorLiga />} />
          <Route path="*" element={<PaginaDeErro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
