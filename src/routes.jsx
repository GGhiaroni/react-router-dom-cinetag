import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favoritos from "./pages/Favoritos";
import Home from "./pages/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
