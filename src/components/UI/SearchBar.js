import { useState } from 'react';
import { Redirect } from 'react-router';

const SearchBar = (props) => {
  const [query, setQuery] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const [searchData, setSearchData] = useState([]);

  const searchInputHandler = (event) => {
		setSearchData([])
    setQuery(event.target.value);
  }

  const submitHandler = async (event) => {
		if (query.trim() === '') {
			return;
		}
		setIsLoading(true);
		event.preventDefault();

		const url = `https://api.themoviedb.org/3/search/multi?api_key=074267499c9579fa79c377a5c6d67602&language=en-US&query=${query}&page=1&include_adult=false`;

		try {
			const res = await fetch(url);
			const data = await res.json();
			props.onSearch(data.results);
			setSearchData(data.results);
		} catch (err) {
			console.error(err);
		}
		setQuery('');
		setIsLoading(false);
	};

	return (
		<div className='searchBar'>
			<form onSubmit={submitHandler} className='searchBar__form'>
				<input
					className='searchBar__input'
					onChange={searchInputHandler}
					name='query'
					value={query}
					type='text'
					placeholder='Search Titles'
					maxLength='50'
				/>
				<button type='submit' className='searchBar__button'>
					<i className='fas fa-search'></i>
				</button>
				{isLoading && (
					<span className='searchBar__loading'>
						<i className='fas fa-spin fa-pulse fa-spinner'></i>
					</span>
				)}
			</form>
			{searchData && searchData.length > 0 && (
				<Redirect
					to={{
						pathname: `/search/${query}`,
					}}
				/>
			)}
		</div>
	);
};

export default SearchBar;
