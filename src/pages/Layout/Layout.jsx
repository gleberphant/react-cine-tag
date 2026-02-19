import { Outlet } from 'react-router-dom';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import Rodape from '../../components/Rodape/Rodape';
import Container from '../../components/Container/Container';
import FavoritosProvider from '../../context/FavoritosProvider';

export default function Layout() {
	return (
		<>
			<header>
				<Cabecalho></Cabecalho>
			</header>
			<main>
				<FavoritosProvider>
					<Container>
						<Outlet></Outlet>
					</Container>
				</FavoritosProvider>
			</main>
			<footer>
				<Rodape></Rodape>
			</footer>
		</>
	);
}
