import MovieList from '../components/MovieList/MovieList';
import MoviesFetchPopular from '../components/MovieList/MoviesFetchPopular';
import MoviesFetchTopRated from '../components/MovieList/MoviesFetchTopRated';
import MoviesFetchTrending from '../components/MovieList/MoviesFetchTrending';

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
			<MoviesFetchPopular {...props} />
			<MoviesFetchTopRated {...props} />
			<MoviesFetchTrending {...props} />
		</div>
	);
};

export default Movies;
