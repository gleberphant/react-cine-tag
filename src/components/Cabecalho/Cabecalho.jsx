import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import styles from './cabecalho.module.css';

export default function Cabecalho() {
	return (
		<div className={styles.cabecalho}>
			<Link className={styles.link} to='./'>
				<img src={logo} alt='logo do app'></img>
			</Link>
			<nav>
				<Link className={styles.link} to='./'>
					<span>Home</span>
				</Link>

				<Link className={styles.link} to='./favoritos'>
					<span>Favoritos</span>
				</Link>
			</nav>
		</div>
	);
}
