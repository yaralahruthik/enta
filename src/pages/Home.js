import MovieList from '../components/MovieList/MovieList';
import FetchMovies from '../components/Fetch/FetchMovies';
import FetchTV from '../components/Fetch/FetchTV';
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
			<FetchMovies
				url={props.API.movies.popularMovies}
				fetchTitle='Popular Movies'
				{...props}
			/>
			<FetchTV
				url={props.API.tv.popularTV}
				fetchTitle='Popular TV'
				{...props}
			/>
			<FetchMovies
				url={props.API.movies.topRatedMovies}
				fetchTitle='Top Rated Movies'
				{...props}
			/>
			<FetchTV
				url={props.API.tv.topRatedTV}
				fetchTitle='Top Rated TV'
				{...props}
			/>
			<FetchMovies
				url={props.API.movies.trendingMovies}
				fetchTitle='Trending Movies'
				{...props}
			/>
			<FetchTV
				url={props.API.tv.trendingTV}
				fetchTitle='Trending TV'
				{...props}
			/>
		</div>
	);
};

export default Home;
