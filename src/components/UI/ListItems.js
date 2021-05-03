const ListItems = (props) => {
	return (
		<div className='listItems'>
			{
				props.items.map((item) => {
					return (
					<div key={item.id} className='listItem__card'>
						<img
							className='listItem__img'
							src={item.imgURL}
							alt={item.title}
						/>
						<h3 className='listItem__title'>{item.title}</h3>
						<p className='listItem__rating'>{item.rating}/10</p>
					</div>
				);})
			}
		</div>
	);
};

export default ListItems;
