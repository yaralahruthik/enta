import { useState, useEffect } from 'react';
import SearchList from '../UI/SearchList';

const FetchMovies = (props) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		let isFetch = true;

		const getItems = async (event) => {
			try {
				const res = await fetch(props.url);
				const data = await res.json();
				if (isFetch) setItems(data.results);
			} catch (err) {
				console.error(err);
			}
		};

		getItems();

		return () => {
			isFetch = false;
		};
	}, [props.url]);

	return (
		<div className='movies'>
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
