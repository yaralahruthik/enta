import { useState, useEffect } from 'react';
import SearchList from '../UI/SearchList';

const FetchTV = (props) => {
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
		<div className='tv'>
			{isLoading && (
				<h2 className='tv__loading'>
					<i className='fas fa-spin fa-pulse fa-spinner'></i>
				</h2>
			)}
			{items.length !== 0 && <h2 className='tv__header'>{props.fetchTitle}</h2>}
			{items.length !== 0 && (
				<SearchList
					mediaType='tv'
					onAdd={props.onTVAdd}
					onRemove={props.onTVRemove}
					duplicates={props.duplicates}
					items={items}
				/>
			)}
		</div>
	);
};

export default FetchTV;
