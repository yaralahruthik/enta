import MovieList from '../components/MovieList/MovieList';
import MoviesFetchPopular from '../components/MovieList/MoviesFetchPopular';
import MoviesFetchTopRated from '../components/MovieList/MoviesFetchTopRated';
import MoviesFetchTrending from '../components/MovieList/MoviesFetchTrending';
import TVFetchPopular from '../components/TVList/TVFetchPopular';
import TVFetchTopRated from '../components/TVList/TVFetchTopRated';
import TVFetchTrending from '../components/TVList/TVFetchTrending';
import TVList from '../components/TVList/TVList';

const Home = (props) => {
	return (
		<div className='home'>
			{props.entaMovieData.length === 0 && props.entaTVData.length === 0 && (
				<h3 className='home__fallback'>Oops, you have watched nothing yet!</h3>
			)}
			{props.entaMovieData.length > 0 && (
				<MovieList
					title='Your Movies'
					onRemove={props.onMovieRemove}
					movieData={props.entaMovieData}
				/>
			)}
			{props.entaTVData.length > 0 && (
				<TVList
					title='Your TV'
					onRemove={props.onTVRemove}
					tvData={props.entaTVData}
				/>
			)}
			<MoviesFetchPopular {...props} />
			<TVFetchPopular {...props} />
			<MoviesFetchTopRated {...props} />
			<TVFetchTopRated {...props} />
			<MoviesFetchTrending {...props} />
			<TVFetchTrending {...props} />
		</div>
	);
};

export default Home;
