import MovieList from '../components/MovieList/MovieList';
import TVList from '../components/TVList/TVList';

const Home = (props) => {
	return (
		<div className='home'>
			{props.entaMovieData.length === 0 && props.entaTVData.length === 0 && <h3 className='home__fallback'>Oops, you have watched nothing yet!</h3>}
			{props.entaMovieData.length > 0 && (
				<MovieList
					onRemove={props.onMovieRemove}
					movieData={props.entaMovieData}
				/>
			)}
			{props.entaTVData.length > 0 && (
				<TVList onRemove={props.onTVRemove} tvData={props.entaTVData} />
			)}
		</div>
	);
};

export default Home;
