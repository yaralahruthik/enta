import SearchList from '../components/UI/SearchList';

const Search = (props) => {
	const itemArray = props.searchData || [];

	const movieItems = itemArray.filter(
		(item) => item.poster_path && item.media_type === 'movie'
	);

	const tvItems = itemArray.filter(
		(item) => item.poster_path && item.media_type === 'tv'
	);

	return (
		<div className='search'>
			{itemArray.length === 0 && (
				<h3 className='search__fallback'>
					Are your gonna search for something or not?
				</h3>
			)}
			{movieItems.length > 0 && <h2 className='search__header'>Movies</h2>}
			<SearchList
				mediaType='movie'
				duplicates={props.duplicates}
				onAdd={props.onMovieAdd}
				onRemove={props.onMovieRemove}
				items={movieItems}
			/>
			{tvItems.length > 0 && <h2 className='search__header'>TV</h2>}
			<SearchList
				mediaType='tv'
				duplicates={props.duplicates}
				onAdd={props.onTVAdd}
				onRemove={props.onTVRemove}
				items={tvItems}
			/>
		</div>
	);
};

export default Search;
