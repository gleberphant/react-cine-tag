import { FavoritosContext } from './FavoritosContext';
import { useState } from 'react';

export default function FavoritosProvider({ children }) {
	const [favoritos, setFavoritos] = useState( [] );

	return (
		<FavoritosContext.Provider value={{ favoritos, setFavoritos }}>
			{children}
		</FavoritosContext.Provider>
	);
}
