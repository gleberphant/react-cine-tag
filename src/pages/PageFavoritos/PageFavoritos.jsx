import Banner from '../../components/Banner/Banner';
import Titulo from '../../components/Titulo/Titulo';
import Container from '../../components/Container/Container';
import Card from '../../components/Card/Card';
import { useFavoritosContext } from '../../context/useFavoritosContext';


export default function PageFavoritos() {
	const [favoritos]  = useFavoritosContext();

	return (
		<>
			<Banner imagem='favoritos'></Banner>
			<Titulo>
				Favoritos
			</Titulo>
			<Container>
				{favoritos.map((item) => {
					return (
						<Card
							key={item.id}
							id={item.id}
							titulo={item.titulo}
							capa={item.capa}
						></Card>
					);
				})}
			</Container>
		</>
	);
}
