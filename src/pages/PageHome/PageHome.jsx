import Banner from '../../components/Banner/Banner';
import Titulo from '../../components/Titulo/Titulo';
import Card from '../../components/Card/Card';
import Container from '../../components/Container/Container';

import jsonVideo from '../../json/db.json';

export default function PageHome() {
	return (
		<>
			<Banner imagem='home'></Banner>
			<Titulo>
				Lugar para guardar seus vídeos
			</Titulo>
			<Container>
				{jsonVideo.map((item) => {
					return (
						<Card key={ item.id} id={item.id} titulo={item.titulo} capa={item.capa}></Card>
					);
				})}
			</Container>
		</>
	);
}
