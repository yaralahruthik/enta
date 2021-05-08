import { useState, useEffect } from 'react';
import TVList from '../components/TVList/TVList';
import SearchList from '../components/UI/SearchList';

const TV = (props) => {
	const [popularTVs, setPopularTVs] = useState([]);
	const [topRatedTVs, setTopRatedTVs] = useState([]);
	const [trendingTVs, setTrendingTVs] = useState([]);

	useEffect(() => {
		let isTrendFetchActive = true;
		let isPopularFetchActive = true;
		let isTopRatedFetchActive = true;

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
		<div className='tv'>
			{props.entaTVData.length === 0 && (
				<h3 className='tv__fallback'>Oops, you have watched nothing yet!</h3>
			)}
			{props.entaTVData.length > 0 && (
				<TVList
					title='Your TV'
					onRemove={props.onTVRemove}
					tvData={props.entaTVData}
				/>
			)}
			{popularTVs.length !== 0 && <h2 className='tv__header'>Popular</h2>}
			{popularTVs.length !== 0 && (
				<SearchList
					onAdd={props.onTVAdd}
					onRemove={props.onTVRemove}
					duplicates={props.duplicates}
					items={popularTVs}
				/>
			)}
			{topRatedTVs.length !== 0 && <h2 className='tv__header'>Top Rated</h2>}
			{topRatedTVs.length !== 0 && (
				<SearchList
					onAdd={props.onTVAdd}
					onRemove={props.onTVRemove}
					duplicates={props.duplicates}
					items={topRatedTVs}
				/>
			)}
			{trendingTVs.length !== 0 && <h2 className='tv__header'>Trending</h2>}
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

export default TV;
