import { useState, useEffect } from 'react';

import AppRouter from './router/AppRouter';
import {
	auth,
	createUserProfileDocument,
	firestore,
} from './firebase/firebase.utils';

import './styles/styles.scss';
import 'normalize.css';

const INITIAL_STATE = {
	currentUser: null,
	movies: [],
	tv: [],
	searchData: [],
	duplicates: {},
};

const API = {
	movies: {
		popularMovies:
			'https://api.themoviedb.org/3/movie/popular?api_key=074267499c9579fa79c377a5c6d67602&language=en-US&page=1',
		trendingMovies:
			'https://api.themoviedb.org/3/trending/movie/week?api_key=074267499c9579fa79c377a5c6d67602',
		topRatedMovies:
			'https://api.themoviedb.org/3/movie/top_rated?api_key=074267499c9579fa79c377a5c6d67602&language=en-US&page=1',
	},
	tv: {
		popularTV:
			'https://api.themoviedb.org/3/tv/popular?api_key=074267499c9579fa79c377a5c6d67602&language=en-US&page=1',
		trendingTV:
			'https://api.themoviedb.org/3/trending/tv/week?api_key=074267499c9579fa79c377a5c6d67602',
		topRatedTV:
			'https://api.themoviedb.org/3/tv/top_rated?api_key=074267499c9579fa79c377a5c6d67602&language=en-US&page=1',
	},
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
			setMovies([]);
			setTV([]);
			setDuplicates({});
		});

		return () => {
			unsubscribe();
		};
	}, []);

	useEffect(() => {
		if (!currentUser) return;
		const fetchData = async () => {
			const movieResponse = firestore
				.collection('users')
				.doc(`${currentUser.id}`)
				.collection('movies');
			const movieData = await movieResponse.get();

			movieData.docs.forEach((item) => {
				duplicates[item.id] = true;
				setMovies((prevMovies) => {
					return [item.data(), ...prevMovies];
				});
				setDuplicates(duplicates);
			});

			const tvResponse = firestore
				.collection('users')
				.doc(`${currentUser.id}`)
				.collection('tv');
			const tvData = await tvResponse.get();

			tvData.docs.forEach((item) => {
				duplicates[item.id] = true;
				setTV((prevTV) => {
					return [item.data(), ...prevTV];
				});
				setDuplicates(duplicates);
			});
		};

		fetchData();
	}, [currentUser, duplicates]);

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

		if (currentUser)
			firestore
				.collection('users')
				.doc(`${currentUser.id}`)
				.collection('movies')
				.doc(`${movie.id}`)
				.set(movie);
	};

	const removeMovie = (movieToRemove) => {
		const newMovies = movies.filter((movie) => movie.id !== movieToRemove.id);
		duplicates[movieToRemove.id] = false;
		setDuplicates(duplicates);
		setMovies(newMovies);
		if (currentUser)
			firestore
				.collection('users')
				.doc(`${currentUser.id}`)
				.collection('movies')
				.doc(`${movieToRemove.id}`)
				.delete();
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
		if (currentUser)
			firestore
				.collection('users')
				.doc(`${currentUser.id}`)
				.collection('tv')
				.doc(`${tvShow.id}`)
				.set(tvShow);
	};

	const removeTV = (tvToRemove) => {
		const newTV = tv.filter((tvShow) => tvShow.id !== tvToRemove.id);
		duplicates[tvToRemove.id] = false;
		setDuplicates(duplicates);
		setTV(newTV);
		if (currentUser)
			firestore
				.collection('users')
				.doc(`${currentUser.id}`)
				.collection('tv')
				.doc(`${tvToRemove.id}`)
				.delete();
	};

	const searchHandler = (searchResults) => {
		setSearchData(searchResults);
	};

	return (
		<AppRouter
			API={API}
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
