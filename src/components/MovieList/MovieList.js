import ListItems from '../UI/ListItems';

const MovieList = (props) => {
  return (
		<div className='movieList'>
			<h2 className='movieList__header'>{props.title}</h2>
			<div className='movieList__list'>
				<ListItems onRemove={props.onRemove} items={props.movieData} />
			</div>
		</div>
	);
}

export default MovieList;