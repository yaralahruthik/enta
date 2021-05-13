import MovieList from '../components/MovieList/MovieList';
import FetchMovies from '../components/Fetch/FetchMovies';

const Movies = (props) => {
	return (
		<div className='movies'>
			{props.entaMovieData.length === 0 && (
				<h3 className='movies__fallback'>
					Oops, you have watched nothing yet!
				</h3>
			)}
			{props.entaMovieData.length > 0 && (
				<MovieList
					title='Your Movies'
					onRemove={props.onMovieRemove}
					movieData={props.entaMovieData}
				/>
			)}
			<FetchMovies
				url={props.movieAPI.popularMovies}
				fetchTitle='Popular Movies'
				{...props}
			/>
			<FetchMovies
				url={props.movieAPI.topRatedMovies}
				fetchTitle='Top Rated Movies'
				{...props}
			/>
			<FetchMovies
				url={props.movieAPI.trendingMovies}
				fetchTitle='Trending Movies'
				{...props}
			/>
		</div>
	);
};

export default Movies;
