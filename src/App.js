import { useState } from 'react';

import AppRouter from './router/AppRouter';

import './styles/styles.scss';
import 'normalize.css';

const INITIAL_STATE = {
	movies: [
		{
			id: 'e1',
			title: 'Interstellar',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/interstellar.jpg`,
			rating: 9,
		},
		{
			id: 'e2',
			title: 'Inception',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/inception.jpg`,
			rating: 8,
		},
		{
			id: 'e3',
			title: 'Dunkirk',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/dunkirk.jpg`,
			rating: 7,
		},
		{
			id: 'e4',
			title: 'Tenet',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/tenet.jpg`,
			rating: 8,
		},
		{
			id: 'e5',
			title: 'Tenet',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/tenet.jpg`,
			rating: 8,
		},
		{
			id: 'e6',
			title: 'Tenet',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/tenet.jpg`,
			rating: 8,
		},
		{
			id: 'e7',
			title: 'Tenet',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/tenet.jpg`,
			rating: 8,
		},
		{
			id: 'e8',
			title: 'Tenet',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/tenet.jpg`,
			rating: 8,
		},
		{
			id: 'e9',
			title: 'Tenet',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/tenet.jpg`,
			rating: 8,
		},
		{
			id: 'e10',
			title: 'Tenet',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/tenet.jpg`,
			rating: 8,
		},
	],
	tv: [
		{
			id: 'e1',
			title: 'Naruto',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/naruto.jpg`,
			rating: 9,
		},
		{
			id: 'e2',
			title: 'Hunter x Hunter',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/hunterxhunter.jpg`,
			rating: 8,
		},
		{
			id: 'e3',
			title: 'Death Note',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/deathNote.jpg`,
			rating: 7,
		},
		{
			id: 'e4',
			title: 'Dr. House MD',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/drHouse.jpg`,
			rating: 8,
		},
	],
};

const App = () => {
	const [movies, setMovies] = useState(INITIAL_STATE.movies);
	const [tv, setTV] = useState(INITIAL_STATE.tv);

	const addMovie = (movie) => {
		setMovies((prevMovies) => {
			return [movie, ...prevMovies];
		})
	};

	const removeMovie = () => {
		return undefined;
	};

	const addTV = (tvShow) => {
		setTV((prevTV) => {
			return [tvShow, ...prevTV];
		});
	};

	const removeTV = () => {
		return undefined;
	};

	return (
		<AppRouter
			onAddMovie={addMovie}
			onRemoveMovie={removeMovie}
			onAddTV={addTV}
			onRemoveTV={removeTV}
			appMoviesData={movies}
			appTVData={tv}
		/>
	);
};

export default App;
