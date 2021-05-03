import ListItems from '../UI/ListItems';

const MovieList = () => {
  const items = [
		{
			id: 'e1',
			title: 'Interstellar',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/interstellar.jpg`,
			rating: 9,
		},
		{
			id: 'e2',
			title: 'Inception',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/inception.jpg`,
			rating: 8,
		},
		{
			id: 'e3',
			title: 'Dunkirk',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/dunkirk.jpg`,
			rating: 7,
		},
		{
			id: 'e4',
			title: 'Tenet',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/tenet.jpg`,
			rating: 8,
		},
		{
			id: 'e5',
			title: 'Tenet',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/tenet.jpg`,
			rating: 8,
		},
		{
			id: 'e6',
			title: 'Tenet',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/tenet.jpg`,
			rating: 8,
		},
		{
			id: 'e7',
			title: 'Tenet',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/tenet.jpg`,
			rating: 8,
		},
		{
			id: 'e8',
			title: 'Tenet',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/tenet.jpg`,
			rating: 8,
		},
		{
			id: 'e9',
			title: 'Tenet',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/tenet.jpg`,
			rating: 8,
		},
		{
			id: 'e10',
			title: 'Tenet',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/tenet.jpg`,
			rating: 8,
		},
	];

  return (
		<div className='movieList'>
			<h2 className='movieList__header'>Your Movies</h2>
			<div className='movieList__list'>
				<ListItems items={items} />
			</div>
		</div>
	);
}

export default MovieList;