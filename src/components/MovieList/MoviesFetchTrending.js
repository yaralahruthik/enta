import { useState, useEffect } from 'react';
import SearchList from '../UI/SearchList';

const MoviesFetchPopular = (props) => {
	const [trendingMovies, setTrendingMovies] = useState([]);

	useEffect(() => {
		let isTrendFetchActive = true;

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

		getTrending();

		return () => {
			isTrendFetchActive = false;
		};
	}, []);

	return (
		<div className='movies'>
			{trendingMovies.length !== 0 && (
				<h2 className='movies__header'>Trending Movies</h2>
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

export default MoviesFetchPopular;
