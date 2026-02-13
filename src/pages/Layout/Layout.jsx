import { Outlet } from 'react-router-dom';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import Rodape from '../../components/Rodape/Rodape';

export default function Layout() {
	return (
		<>
			<header>
				<Cabecalho></Cabecalho>
			</header>
			<main>
				<Outlet></Outlet>
			</main>
			<footer>
				<Rodape></Rodape>
			</footer>
		</>
	);
}
