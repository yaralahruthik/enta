import { useState, useEffect } from 'react';
import SearchList from '../UI/SearchList';

const TVFetchPopular = (props) => {
	const [popularTVs, setPopularTVs] = useState([]);

	useEffect(() => {
		let isPopularFetchActive = true;

		const getPopular = async (event) => {
			const url = `https://api.themoviedb.org/3/tv/popular?api_key=074267499c9579fa79c377a5c6d67602&language=en-US&page=1`;

			try {
				const res = await fetch(url);
				const data = await res.json();
				if (isPopularFetchActive) setPopularTVs(data.results);
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
		<div className='tv'>
			{popularTVs.length !== 0 && <h2 className='tv__header'>Popular TV</h2>}
			{popularTVs.length !== 0 && (
				<SearchList
					onAdd={props.onTVAdd}
					onRemove={props.onTVRemove}
					duplicates={props.duplicates}
					items={popularTVs}
				/>
			)}
		</div>
	);
};

export default TVFetchPopular;
