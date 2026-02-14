import styles from './PageHome.module.css';
import Banner from '../../components/Banner/Banner';
import Titulo from '../../components/Titulo/Titulo';
import Card from '../../components/Card/Card';
import jsonVideo from '../../json/db.json';

export default function PageHome() {
	return (
		<>
			<Banner imagem='home'></Banner>
			<Titulo>
				<h1>Lugar para guardar seus vídeos</h1>
			</Titulo>
			<section className={styles.container}>
				{jsonVideo.map((item) => {
					return (
						<Card id={item.id} titulo={item.titulo} capa={item.capa}></Card>
					);
				})}
			</section>
		</>
	);
}
