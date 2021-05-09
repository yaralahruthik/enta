const ListItems = (props) => {
	const removeHandler = (item) => {
		props.onRemove(item);
	};

	return (
		<div className='listItems'>
			{
				props.items.map((item) => {
					return (
						<div key={item.id} className='listItem__card'>
							<div
								className='listItem__img'
								style={{
									background: `url(${item.imgURL})`,
									backgroundSize: '150px 160px',
								}}
								alt={item.title}
							><button onClick={() => removeHandler(item)} className='listItem__remove'>X</button></div>
							<h3 className='listItem__title'>{item.title}</h3>
							<p className='listItem__rating'>{item.rating}/10</p>
						</div>
					);})
			}
		</div>
	);
};

export default ListItems;
