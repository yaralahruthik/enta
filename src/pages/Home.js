import MovieList from '../components/MovieList/MovieList';
import TVList from '../components/TVList/TVList';

const Home = (props) => {
	return (
		<div>
			<MovieList movieData={props.entaData.movies} />
			<TVList tvData={props.entaData.tv} />
		</div>
	);
};

export default Home;
