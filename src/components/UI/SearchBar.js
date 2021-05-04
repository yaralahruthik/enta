import { useState } from 'react';
import { Redirect } from 'react-router';

const SearchBar = () => {
  const [query, setQuery] = useState('');

	const [searchData, setSearchData] = useState([]);

  const searchInputHandler = (event) => {
    setQuery(event.target.value);
  }

  const submitHandler = async (event) => {
		event.preventDefault();

		const url = `https://api.themoviedb.org/3/search/multi?api_key=074267499c9579fa79c377a5c6d67602&language=en-US&query=${query}&page=1&include_adult=false`;

		try {
			const res = await fetch(url);
			const data = await res.json();
			setSearchData(data.results);
		} catch (err) {
			console.error(err);
		}
		setQuery('');
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
			</form>
			{searchData !== undefined && searchData.length > 0 && (
				<Redirect
					to={{
						pathname: `/search/${query}`,
						searchResultsData: { searchData },
					}}
				/>
			)}
		</div>
	);
};

export default SearchBar;
