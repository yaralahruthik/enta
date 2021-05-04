const SearchList = (props) => {
  return (
		<div className='listItems'>
			{props.items.map((item) => {
				return (
					<div key={item.id} className='listItem__card'>
						<img
							className='listItem__img'
							src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
							alt={item.title}
						/>
						<h3 className='listItem__title'>{item.title || item.name}</h3>
						<p className='listItem__rating'>{item.vote_average}/10</p>
						<button className='listItem__button'>Add</button>
					</div>
				);
			})}
		</div>
	);
}

export default SearchList;