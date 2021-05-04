import MovieList from '../components/MovieList/MovieList';
import TVList from '../components/TVList/TVList';

const Home = (props) => {
	return (
		<div>
			<MovieList movieData={props.entaMovieData} />
			<TVList tvData={props.entaTVData} />
		</div>
	);
};

export default Home;
