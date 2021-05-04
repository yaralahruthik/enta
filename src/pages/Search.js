import SearchList from '../components/UI/SearchList';

const Search = (props) => {
  return (
		<div className='search'>
			<h2 className='search__header'>Movies</h2>
			<SearchList
				items={props.location.searchData.movies.filter(
					(item) => item.poster_path && item.media_type === 'movie'
				)}
			/>
			<h2 className='search__header'>TV</h2>
			<SearchList
				items={props.location.searchData.movies.filter(
					(item) => item.poster_path && item.media_type === 'tv'
				)}
			/>
		</div>
	);
}

export default Search;