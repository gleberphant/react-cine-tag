import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import styles from './Player.module.css';
import Titulo from '../../components/Titulo/Titulo';
import listaVideos from '../../json/db';

export default function Player() {
	const parametros = useParams();

	const video = listaVideos.find((item) => Number(parametros.id) === item.id);

	if (video) console.log(video);

	return (
		<>
			<Banner imagem='player'></Banner>
			<Titulo> Player </Titulo>
			<section className={styles.container}>
				<iframe
					width='100%'
					height='100%'
					src={video.link}
					title={video.link}
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					referrerPolicy='strict-origin-when-cross-origin'
					allowFullScreen
				></iframe>
			</section>
		</>
	);
}
