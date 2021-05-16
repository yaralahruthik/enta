import { Fragment, useState } from 'react';
import { Img } from 'react-image';
import FetchVideo from '../Fetch/FetchVideo';

const SearchList = (props) => {
	const [modalShow, setModalShow] = useState(false);
	const [id, setID] = useState('');

	const addHandler = (item) => {
		let itemPack = {
			id: item.id,
			imgURL: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
			rating: item.vote_average,
			title: item.title || item.name,
		};
		props.onAdd(itemPack);
	};

	const removeHandler = (item) => {
		props.onRemove(item);
	};

	const imageClickHandler = (item) => {
		setModalShow(true);
		setID(item.id);
	}

	return (
		<Fragment>
			<div className='videoModal'>
				{modalShow && <FetchVideo mediaType={props.mediaType} id={id} />}
			</div>
			<div className='listItems'>
				{props.items.map((item) => {
					return (
						<div key={item.id} className='listItem__card'>
							<Img
								onClick={() => imageClickHandler(item)}
								className='listItem__img'
								src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
								loader={<i className='fas fa-spin fa-pulse fa-spinner'></i>}
								alt={item.title}
							/>
							<h3 className='listItem__title'>{item.title || item.name}</h3>
							<p className='listItem__rating'>{item.vote_average}/10</p>
							{!props.duplicates[item.id] && (
								<button
									onClick={() => addHandler(item)}
									className='listItem__button'
								>
									Add
								</button>
							)}
							{props.duplicates[item.id] && (
								<button
									onClick={() => removeHandler(item)}
									className='listItem__button'
								>
									Remove
								</button>
							)}
						</div>
					);
				})}
			</div>
		</Fragment>
	);
};

export default SearchList;
