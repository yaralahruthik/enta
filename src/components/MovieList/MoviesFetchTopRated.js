import { useState, useEffect } from 'react';
import SearchList from '../UI/SearchList';

const MoviesFetchPopular = (props) => {
	const [topRatedMovies, setTopRatedMovies] = useState([]);

	useEffect(() => {
		let isTopRatedFetchActive = true;

		const getTopRated = async (event) => {
			const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=074267499c9579fa79c377a5c6d67602&language=en-US&page=1`;

			try {
				const res = await fetch(url);
				const data = await res.json();
				if (isTopRatedFetchActive) setTopRatedMovies(data.results);
			} catch (err) {
				console.error(err);
			}
		};

		getTopRated();

		return () => {
			isTopRatedFetchActive = false;
		};
	}, []);

	return (
		<div className='movies'>
			{topRatedMovies.length !== 0 && (
				<h2 className='movies__header'>Top Rated Movies</h2>
			)}
			{topRatedMovies.length !== 0 && (
				<SearchList
					onAdd={props.onMovieAdd}
					onRemove={props.onMovieRemove}
					duplicates={props.duplicates}
					items={topRatedMovies}
				/>
			)}
		</div>
	);
};

export default MoviesFetchPopular;
