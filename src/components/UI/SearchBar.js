import { useState } from 'react';
import { Redirect } from 'react-router';

const SearchBar = () => {
  const [search, setSearch] = useState('');

	const [movies, setMovies] = useState([]);

  const searchInputHandler = (event) => {
    setSearch(event.target.value);
  }

  const submitHandler = async (event) => {
		event.preventDefault();

		const query = search;

		const url = `https://api.themoviedb.org/3/search/multi?api_key=074267499c9579fa79c377a5c6d67602&language=en-US&query=${query}&page=1&include_adult=false`;

		try {
			const res = await fetch(url);
			const data = await res.json();
			setMovies(data.results);
		} catch (err) {
			console.error(err);
		}
		setSearch('');
	};

	return (
		<div className='searchBar'>
			<form onSubmit={submitHandler} className='searchBar__form'>
				<input
					className='searchBar__input'
					onChange={searchInputHandler}
					name='query'
					value={search}
					type='text'
					placeholder='Search Titles'
					maxLength='50'
				/>
				<button type='submit' className='searchBar__button'>
					<i className='fas fa-search'></i>
				</button>
			</form>
			{movies !== undefined && movies.length > 0 && (
				<Redirect
					to={{
						pathname: `/search/?${search}`,
						searchData: { movies },
					}}
				/>
			)}
		</div>
	);
};

export default SearchBar;
