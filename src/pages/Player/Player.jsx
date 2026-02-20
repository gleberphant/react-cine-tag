import styles from './Player.module.css';

import Banner from '../../components/Banner/Banner';

import Titulo from '../../components/Titulo/Titulo';
import Loading from '../../components/Loading/Loading';

import PageNaoEncontrada from '../PageNaoEncontrada/PageNaoEncontrada';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Player() {
	const parametros = useParams();
	const [video, setVideo] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		fetch(
			`https://my-json-server.typicode.com/gleberphant/react-cine-tag/videos?id=${parametros.id}`,
		)
			.then((resp) => resp.json())
			.then((data) => {
				if (data.length === 0) setError(true);
				else setVideo(data[0]);

				setLoading(false);
			});
	}, [parametros.id]);

	if (loading) return <Loading />;

	if (error) return <PageNaoEncontrada />;

	return (
		<>
			<Banner imagem='player'></Banner>
			<Titulo> {video.titulo} </Titulo>
			<section className={styles.container}>
				<iframe
					width='100%'
					height='100%'
					src={video.link}
					title={video.titulo}
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					referrerPolicy='strict-origin-when-cross-origin'
					allowFullScreen
				></iframe>
			</section>
		</>
	);
}
