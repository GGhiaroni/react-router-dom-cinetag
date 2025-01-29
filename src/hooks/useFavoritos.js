import { useContext } from "react";
import { FavoritosContext } from "../contextos/Favoritos";

const useFavoritoContext = () => {
  const { favorito, setFavorito } = useContext(FavoritosContext);

  function adicionarFavoritos(novoFavorito) {
    const favoritoRepetido = favorito.some(
      (item) => item.id === novoFavorito.id
    );

    let novaListaFavoritos = [...favorito];

    if (!favoritoRepetido) novaListaFavoritos.push(novoFavorito);
    else {
      novaListaFavoritos = novaListaFavoritos.filter(
        (item) => item.id !== novoFavorito.id
      );
    }
    setFavorito(novaListaFavoritos);
  }
  return { favorito, adicionarFavoritos };
};

export default useFavoritoContext;
