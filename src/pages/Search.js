const Search = (props) => {
  return (
		<div className='listItems'>
			{
				props.location.searchData.movies.filter((item) => item.poster_path && item.media_type !== 'person').map((item) => {
					return (
						<div key={item.id} className='listItem__card'>
							<img
								className='listItem__img'
								src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
								alt={item.title}
							/>
							<h3 className='listItem__title'>{item.title || item.name}</h3>
							<p className='listItem__rating'>{item.vote_average}/10</p>
							<p className='listItem__mediaType'>
								{item.media_type.toUpperCase()}
							</p>
							<button className='listItem__button'>Add</button>
						</div>
					);})
			}
		</div>
	);
}

export default Search;