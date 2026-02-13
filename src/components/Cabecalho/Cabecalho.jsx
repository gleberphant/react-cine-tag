import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import styles from './cabecalho.module.css';
import CabecalhoLink from './CabecalhoLink/CabecalhoLink';

export default function Cabecalho() {
	return (
		<div className={styles.cabecalho}>
			<CabecalhoLink url='./'>
				<img src={logo} alt='logo do app'></img>
			</CabecalhoLink>
			<nav>
				<CabecalhoLink url='/'>
					<span>Home</span>
				</CabecalhoLink>

				<CabecalhoLink url='/favoritos'>
					<span>Favoritos</span>
				</CabecalhoLink>
			</nav>
		</div>
	);
}
