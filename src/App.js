import { useState, useEffect } from 'react';

import AppRouter from './router/AppRouter';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './styles/styles.scss';
import 'normalize.css';

const INITIAL_STATE = {
	currentUser: null,
	movies: [],
	tv: [],
	searchData: [],
	duplicates: {},
};

const App = () => {
	const [currentUser, setCurrentUser] = useState(INITIAL_STATE.currentUser);
	const [duplicates, setDuplicates] = useState(INITIAL_STATE.duplicates);
	const [movies, setMovies] = useState(INITIAL_STATE.movies);
	const [tv, setTV] = useState(INITIAL_STATE.tv);
	const [searchData, setSearchData] = useState(INITIAL_STATE.searchData);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			} else {
				setCurrentUser(userAuth);
			}
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const addMovie = (movie) => {
		for (const item of movies) {
			if (movie.title === item.title) {
				return false;
			}
		}
		duplicates[movie.id] = true;
		setDuplicates(duplicates);
		setMovies((prevMovies) => {
			return [movie, ...prevMovies];
		});
	};

	const removeMovie = (movieToRemove) => {
		const newMovies = movies.filter((movie) => movie.id !== movieToRemove.id);
		duplicates[movieToRemove.id] = false;
		setDuplicates(duplicates);
		setMovies(newMovies);
	};

	const addTV = (tvShow) => {
		for (const item of tv) {
			if (tvShow.title === item.title) {
				return false;
			}
		}
		duplicates[tvShow.id] = true;
		setDuplicates(duplicates);
		setTV((prevTV) => {
			return [tvShow, ...prevTV];
		});
	};

	const removeTV = (tvToRemove) => {
		const newTV = tv.filter((tvShow) => tvShow.id !== tvToRemove.id);
		duplicates[tvToRemove.id] = false;
		setDuplicates(duplicates);
		setTV(newTV);
	};

	const searchHandler = (searchResults) => {
		setSearchData(searchResults);
	};

	return (
		<AppRouter
			currentUser={currentUser}
			onSearch={searchHandler}
			onAddMovie={addMovie}
			onRemoveMovie={removeMovie}
			onAddTV={addTV}
			onRemoveTV={removeTV}
			appMoviesData={movies}
			appTVData={tv}
			appSearchData={searchData}
			duplicates={duplicates}
		/>
	);
};

export default App;
