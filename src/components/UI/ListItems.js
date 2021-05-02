const ListItems = (props) => {
	return (
		<div className='listItems'>
			<div className='listItem__card'>
				<img
					className='listItem__img'
					src={props.items[0].imgURL}
					alt={props.items[0].title}
				/>
				<h3 className='listItem__title'>{props.items[0].title}</h3>
				<p className='listItem__rating'>{props.items[0].rating}/10</p>
			</div>
			<div className='listItem__card'>
				<img
					className='listItem__img'
					src={props.items[1].imgURL}
					alt={props.items[1].title}
				/>
				<h3 className='listItem__title'>{props.items[1].title}</h3>
				<p className='listItem__rating'>{props.items[1].rating}/10</p>
			</div>
			<div className='listItem__card'>
				<img
					className='listItem__img'
					src={props.items[2].imgURL}
					alt={props.items[2].title}
				/>
				<h3 className='listItem__title'>{props.items[2].title}</h3>
				<p className='listItem__rating'>{props.items[2].rating}/10</p>
			</div>
			<div className='listItem__card'>
				<img
					className='listItem__img'
					src={props.items[3].imgURL}
					alt={props.items[3].title}
				/>
				<h3 className='listItem__title'>{props.items[3].title}</h3>
				<p className='listItem__rating'>{props.items[3].rating}/10</p>
			</div>
		</div>
	);
};

export default ListItems;
