import { useState, useEffect } from 'react';
import MovieList from '../components/MovieList/MovieList';
import SearchList from '../components/UI/SearchList';

const Movies = (props) => {
	const [popularMovies, setPopularMovies] = useState([]);
	const [topRatedMovies, setTopRatedMovies] = useState([]);
	const [trendingMovies, setTrendingMovies] = useState([]);

	useEffect(() => {
		let isTrendFetchActive =  true;
		let isPopularFetchActive =  true;
		let isTopRatedFetchActive =  true;

		const getTrending = async (event) => {
			const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=074267499c9579fa79c377a5c6d67602`;

			try {
				const res = await fetch(url);
				const data = await res.json();
				if (isTrendFetchActive) setTrendingMovies(data.results);
			} catch (err) {
				console.error(err);
			}
		};

		const getPopular = async (event) => {
			const url = `https://api.themoviedb.org/3/movie/popular?api_key=074267499c9579fa79c377a5c6d67602&language=en-US&page=1`;

			try {
				const res = await fetch(url);
				const data = await res.json();
				if (isPopularFetchActive) setPopularMovies(data.results);
			} catch (err) {
				console.error(err);
			}
		};

		const getTopRated = async (event) => {
			const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=074267499c9579fa79c377a5c6d67602&language=en-US&page=1`;

			try {
				const res = await fetch(url);
				const data = await res.json();
				if ( isTopRatedFetchActive) setTopRatedMovies(data.results);
			} catch (err) {
				console.error(err);
			}
		};

		getPopular();
		getTopRated();
		getTrending();

		return () => {
			isTrendFetchActive = false;
			isPopularFetchActive = false;
			isTopRatedFetchActive = false;
		};
	}, []);

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
			{popularMovies.length !== 0 && (
				<h2 className='movies__header'>Popular</h2>
			)}
			{popularMovies.length !== 0 && (
				<SearchList
					onAdd={props.onMovieAdd}
					onRemove={props.onMovieRemove}
					duplicates={props.duplicates}
					items={popularMovies}
				/>
			)}
			{topRatedMovies.length !== 0 && (
				<h2 className='movies__header'>Top Rated</h2>
			)}
			{topRatedMovies.length !== 0 && (
				<SearchList
					onAdd={props.onMovieAdd}
					onRemove={props.onMovieRemove}
					duplicates={props.duplicates}
					items={topRatedMovies}
				/>
			)}
			{trendingMovies.length !== 0 && (
				<h2 className='movies__header'>Trending</h2>
			)}
			{trendingMovies.length !== 0 && (
				<SearchList
					onAdd={props.onMovieAdd}
					onRemove={props.onMovieRemove}
					duplicates={props.duplicates}
					items={trendingMovies}
				/>
			)}
		</div>
	);
};

export default Movies;
