import Footer from "components/Footer";
import Header from "components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavoritosProvider from "./contextos/Favoritos";
import Favoritos from "./pages/Favoritos";
import Home from "./pages/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <FavoritosProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </FavoritosProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
