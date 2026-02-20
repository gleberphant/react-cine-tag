import { Link } from 'react-router-dom';

import styles from './Card.module.css';
import iconeFavoritado from '../../assets/favoritado.png';
import iconeDesfavoritado from '../../assets/desfavoritado.png';

import { FavoritosContext } from '../../context/FavoritosContext';
import { useFavoritosContext } from '../../context/useFavoritosContext';

export default function Card({
	id,
	titulo,
	capa = 'https://img.freepik.com/vetores-gratis/pato-bonito-em-branco_1308-41058.jpg?semt=ais_user_personalization&w=740&q=80',
}) {
	const [favoritos, adicionarFavorito] = useFavoritosContext(FavoritosContext);

	const ehFavorito = favoritos.some((item) => item.id === id);

	const iconeFavorito = ehFavorito ? iconeFavoritado : iconeDesfavoritado;

	return (
		<div className={styles.container}>
			<Link className={styles.link} to={`/video/${id}`}>
				<img src={capa} alt={titulo} className={styles.capa} />

				<h2>
					{titulo} - {id}
				</h2>
			</Link>
			<img
				src={iconeFavorito}
				alt='favoritar'
				className={styles.favoritar}
				onClick={() => {
					adicionarFavorito({ id, titulo, capa });
				}}
			/>
		</div>
	);
}
