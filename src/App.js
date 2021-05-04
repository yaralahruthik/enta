import Home from './pages/Home';
import Movies from './pages/Movies';
import TV from './pages/TV';
import About from './pages/About';
import Login from './pages/Login';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/styles.scss';
import 'normalize.css';

const DUMMY_DATA = {
	movies: [
		{
			id: 'e1',
			title: 'Interstellar',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/interstellar.jpg`,
			rating: 9,
		},
		{
			id: 'e2',
			title: 'Inception',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/inception.jpg`,
			rating: 8,
		},
		{
			id: 'e3',
			title: 'Dunkirk',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/dunkirk.jpg`,
			rating: 7,
		},
		{
			id: 'e4',
			title: 'Tenet',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/tenet.jpg`,
			rating: 8,
		},
		{
			id: 'e5',
			title: 'Tenet',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/tenet.jpg`,
			rating: 8,
		},
		{
			id: 'e6',
			title: 'Tenet',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/tenet.jpg`,
			rating: 8,
		},
		{
			id: 'e7',
			title: 'Tenet',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/tenet.jpg`,
			rating: 8,
		},
		{
			id: 'e8',
			title: 'Tenet',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/tenet.jpg`,
			rating: 8,
		},
		{
			id: 'e9',
			title: 'Tenet',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/tenet.jpg`,
			rating: 8,
		},
		{
			id: 'e10',
			title: 'Tenet',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/tenet.jpg`,
			rating: 8,
		},
	],
	tv: [
		{
			id: 'e1',
			title: 'Naruto',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/naruto.jpg`,
			rating: 9,
		},
		{
			id: 'e2',
			title: 'Hunter x Hunter',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/hunterxhunter.jpg`,
			rating: 8,
		},
		{
			id: 'e3',
			title: 'Death Note',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/deathNote.jpg`,
			rating: 7,
		},
		{
			id: 'e4',
			title: 'Dr. House MD',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/drHouse.jpg`,
			rating: 8,
		},
	],
};

function App() {
	return (
		<BrowserRouter>
			<div className='body'>
				<Header />
				<div className='body__content'>
					<Switch>
						<Route path='/' exact={true}>
							<Home entaData={DUMMY_DATA} />
						</Route>
						<Route path='/movies'>
							<Movies movieData={DUMMY_DATA.movies} />
						</Route>
						<Route path='/tv'>
							<TV tvData={DUMMY_DATA.tv} />
						</Route>
						<Route path='/search' component={Search} />
						<Route path='/about' component={About} />
						<Route path='/login' component={Login} />
						<Route component={NotFound} />
					</Switch>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
