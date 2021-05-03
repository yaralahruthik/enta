const ListItems = (props) => {
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
									backgroundSize: '120px 150px'
								}}
								alt={item.title}
							><button className='listItem__remove'>X</button></div>
							<h3 className='listItem__title'>{item.title}</h3>
							<p className='listItem__rating'>{item.rating}/10</p>
						</div>
					);})
			}
		</div>
	);
};

export default ListItems;
