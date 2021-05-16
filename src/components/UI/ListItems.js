import { Img } from 'react-image';

const ListItems = (props) => {
	const removeHandler = (item) => {
		props.onRemove(item);
	};

	return (
		<div className='listItems'>
			{props.items.map((item) => {
				return (
					<div key={item.id} className='listItem__card'>
						<button
							onClick={() => removeHandler(item)}
							className='listItem__remove'
						>
							X
						</button>
						<Img
							className='listItem__img'
							src={`https://image.tmdb.org/t/p/w500${item.imgURL}`}
							loader={<i className='fas fa-spin fa-pulse fa-spinner'></i>}
							alt={item.title}
						/>
						<h3 className='listItem__title'>{item.title}</h3>
						<p className='listItem__rating'>{item.rating}/10</p>
					</div>
				);
			})}
		</div>
	);
};

export default ListItems;
