import Banner from '../../components/Banner/Banner';
import Titulo from '../../components/Titulo/Titulo';
import Card from '../../components/Card/Card';
import Container from '../../components/Container/Container';
import { useEffect, useState } from 'react';

//import jsonVideo from '../../json/db.json';

export default function PageHome() {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		fetch(
			'https://my-json-server.typicode.com/gleberphant/react-cine-tag/videos',
		)
			.then((resposta) => resposta.json())
			.then((dados) => {
				setVideos(dados);
				console.log(dados);
			});
	}, []);

	return (
		<>
			<Banner imagem='home'></Banner>
			<Titulo>Lugar para guardar seus vídeos</Titulo>
			<Container>
				{videos.map((item) => {
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
