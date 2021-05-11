import { useState, useEffect } from 'react';
import SearchList from '../UI/SearchList';

const TVFetchTrending = (props) => {
	const [trendingTVs, setTrendingTVs] = useState([]);

	useEffect(() => {
		let isTrendFetchActive = true;

		const getTrending = async (event) => {
			const url = `https://api.themoviedb.org/3/trending/tv/week?api_key=074267499c9579fa79c377a5c6d67602`;

			try {
				const res = await fetch(url);
				const data = await res.json();
				if (isTrendFetchActive) setTrendingTVs(data.results);
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
		<div className='tv'>
			{trendingTVs.length !== 0 && <h2 className='tv__header'>Trending TV</h2>}
			{trendingTVs.length !== 0 && (
				<SearchList
					onAdd={props.onTVAdd}
					onRemove={props.onTVRemove}
					duplicates={props.duplicates}
					items={trendingTVs}
				/>
			)}
		</div>
	);
};

export default TVFetchTrending;
