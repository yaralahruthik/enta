import FetchVideo from '../Fetch/FetchVideo';

import { useState } from 'react';
import ListItems from '../UI/ListItems';

const MovieList = (props) => {
	const [modalShow, setModalShow] = useState(false);
	const [id, setID] = useState('');

	const imageClickHandler = (item) => {
		setModalShow(true);
		setID(item.id);
	};

	return (
		<div className='movieList'>
			<h2 className='movieList__header'>{props.title}</h2>
			<div className='listItems__video'>
				{modalShow && <FetchVideo mediaType='movie' id={id} />}
			</div>
			<div className='movieList__list'>
				<ListItems
					imageClickHandler={imageClickHandler}
					onRemove={props.onRemove}
					items={props.movieData}
				/>
			</div>
		</div>
	);
};

export default MovieList;
