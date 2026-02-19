import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout/Layout';
import PagePlayer from './pages/Player/Player';
import PageHome from './pages/PageHome/PageHome';
import PageFavoritos from './pages/PageFavoritos/PageFavoritos';
import PageNaoEncontrada from './pages/PageNaoEncontrada/PageNaoEncontrada';
import FavoritosProvider from './context/FavoritosProvider';

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<FavoritosProvider>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<PageHome />} />
						<Route path='favoritos' element={<PageFavoritos />} />
						<Route path='/:id' element={<PagePlayer /> } />
						<Route path='*' element={<PageNaoEncontrada />} />
					</Route>
				</Routes>
			</FavoritosProvider>
		</BrowserRouter>
	);
}
