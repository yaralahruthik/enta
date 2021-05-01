import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import TVList from './components/TVList/TVList';
import Footer from './components/Footer/Footer';

import './styles/styles.scss';
import 'normalize.css'

function App() {
  return (
		<div>
			<Header />
			<MovieList />
			<TVList />
			<Footer />
		</div>
	);
}

export default App;