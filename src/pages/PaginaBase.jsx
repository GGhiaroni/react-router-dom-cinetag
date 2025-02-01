import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FavoritosProvider from "../contextos/Favoritos";

const PaginaBase = () => {
  return (
    <main>
      <Header />
      <FavoritosProvider>
        <Outlet />
      </FavoritosProvider>
      <Footer />
    </main>
  );
};

export default PaginaBase;
