import { Outlet } from 'react-router-dom';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import Rodape from '../../components/Rodape/Rodape';
import Container from '../../components/Container/Container';

export default function Layout() {
	return (
		<>
			<header>
				<Cabecalho></Cabecalho>
			</header>
			<main>
				<Container>
					<Outlet></Outlet>
				</Container>
			</main>
			<footer>
				<Rodape></Rodape>
			</footer>
		</>
	);
}
