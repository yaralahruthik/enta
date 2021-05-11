import { useState, useEffect } from 'react';
import SearchList from '../UI/SearchList';

const MoviesFetchPopular = (props) => {
	const [popularMovies, setPopularMovies] = useState([]);

	useEffect(() => {
		let isPopularFetchActive = true;

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

		getPopular();

		return () => {
			isPopularFetchActive = false;
		};
	}, []);

	return (
		<div className='movies'>
			{popularMovies.length !== 0 && (
				<h2 className='movies__header'>Popular Movies</h2>
			)}
			{popularMovies.length !== 0 && (
				<SearchList
					onAdd={props.onMovieAdd}
					onRemove={props.onMovieRemove}
					duplicates={props.duplicates}
					items={popularMovies}
				/>
			)}
		</div>
	);
};

export default MoviesFetchPopular;
