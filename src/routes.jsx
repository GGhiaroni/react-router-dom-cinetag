import Footer from "components/Footer";
import Header from "components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favoritos from "./pages/Favoritos";
import Home from "./pages/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
