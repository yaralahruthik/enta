import { Fragment, useEffect, useState } from 'react';

const FetchVideo = (props) => {
	const [key, setKey] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
		let isFetch = true;
		setError('')

		const getItems = async (event) => {
			const url = `https://api.themoviedb.org/3/${props.mediaType}/${props.id}/videos?api_key=074267499c9579fa79c377a5c6d67602&language=en-US`;
			
			try {
				const res = await fetch(url);
				const data = await res.json();
				if (isFetch) setKey(data.results[0].key);
			} catch (err) {
				setError('Could Not Find Video link!')
			}
		};

		getItems();

		return () => {
			isFetch = false;
		};
	}, [props]);

	return (
		<Fragment>
			{!error && (
				<iframe
					src={`https://www.youtube.com/embed/${key}`}
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
					title='Embedded youtube'
				/>
			)}
			{error && <p className='videoModal__error'>{error}</p>}
		</Fragment>
	);
};

export default FetchVideo;
