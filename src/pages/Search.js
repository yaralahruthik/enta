import SearchList from '../components/UI/SearchList';

const Search = (props) => {
	const itemArray = props.location.searchResultsData.searchData;

	const movieItems = itemArray.filter(
		(item) => item.poster_path && item.media_type === 'movie'
	);
	const tvItems = itemArray.filter(
		(item) => item.poster_path && item.media_type === 'tv'
	);

	return (
		<div className='search'>
			{movieItems.length > 0 && (
				<h2 className='search__header'>Movies</h2>
			)}
			<SearchList items={movieItems} />
			{tvItems.length > 0 && (
				<h2 className='search__header'>TV</h2>
			)}
			<SearchList items={tvItems} />
		</div>
	);
};

export default Search;
