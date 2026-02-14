import styles from './Card.module.css';
import iconeFavoritar from '../../assets/favoritar.png';
export default function Card({
	id,
	titulo,
	capa = 'https://img.freepik.com/vetores-gratis/pato-bonito-em-branco_1308-41058.jpg?semt=ais_user_personalization&w=740&q=80',
}) {
	return (
		<div className={styles.container}>
			<img src={capa} alt={titulo} className={styles.capa} />
			<h2>
				 {titulo} - {id}
			</h2>
			<img src={iconeFavoritar} alt='favoritar' className={styles.favoritar} />
		</div>
	);
}
