import Footer from "components/Footer";
import Header from "components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavoritosProvider from "./contextos/Favoritos";
import TimesProvider from "./contextos/Times";
import Favoritos from "./pages/Favoritos";
import Home from "./pages/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <TimesProvider>
        <FavoritosProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </FavoritosProvider>
      </TimesProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
