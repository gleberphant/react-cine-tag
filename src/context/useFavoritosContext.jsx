import { FavoritosContext } from './FavoritosContext';
import { useContext } from 'react';

export function useFavoritosContext() {
	const { favoritos, setFavoritos } = useContext(FavoritosContext);

	function adicionarFavorito(novoFavorito) {
		const index = favoritos.findIndex((item) => item.id === novoFavorito.id);
		console.log("adicionando favorito")
		if (index < 0) {
			setFavoritos([...favoritos, novoFavorito]);
		} else {
			let novoArray = [...favoritos];
			novoArray[index] = favoritos[favoritos.length - 1];
			novoArray.pop();
			setFavoritos(novoArray);
		}
	}

	return [favoritos, adicionarFavorito]
}
