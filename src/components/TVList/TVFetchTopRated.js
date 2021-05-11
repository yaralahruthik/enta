import { useState, useEffect } from 'react';
import SearchList from '../UI/SearchList';

const TVFetchTopRated = (props) => {
	const [topRatedTVs, setTopRatedTVs] = useState([]);

	useEffect(() => {
		let isTopRatedFetchActive = true;

		const getTopRated = async (event) => {
			const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=074267499c9579fa79c377a5c6d67602&language=en-US&page=1`;

			try {
				const res = await fetch(url);
				const data = await res.json();
				if (isTopRatedFetchActive) setTopRatedTVs(data.results);
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
		<div className='tv'>
			{topRatedTVs.length !== 0 && <h2 className='tv__header'>Top Rated TV</h2>}
			{topRatedTVs.length !== 0 && (
				<SearchList
					onAdd={props.onTVAdd}
					onRemove={props.onTVRemove}
					duplicates={props.duplicates}
					items={topRatedTVs}
				/>
			)}
		</div>
	);
};

export default TVFetchTopRated;
