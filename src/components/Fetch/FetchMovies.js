import { useState, useEffect } from 'react';
import SearchList from '../UI/SearchList';

const FetchMovies = (props) => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		let isFetch = true;

		const getItems = async (event) => {
			setIsLoading(true);
			try {
				const res = await fetch(props.url);
				const data = await res.json();
				if (isFetch) setItems(data.results);
			} catch (err) {
				console.error(err);
			}
			setIsLoading(false);
		};

		getItems();

		return () => {
			isFetch = false;
		};
	}, [props.url]);

	return (
		<div className='movies'>
			{isLoading && (
				<h2 className='movies__loading'>
					<i className='fas fa-spin fa-pulse fa-spinner'></i>
				</h2>
			)}
			{items.length !== 0 && (
				<h2 className='movies__header'>{props.fetchTitle}</h2>
			)}
			{items.length !== 0 && (
				<SearchList
					onAdd={props.onMovieAdd}
					onRemove={props.onMovieRemove}
					duplicates={props.duplicates}
					items={items}
				/>
			)}
		</div>
	);
};

export default FetchMovies;
