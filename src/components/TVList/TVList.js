import ListItems from '../UI/ListItems';

const TVList = () => {
	const items = [
		{
			id: 'e1',
			title: 'Naruto',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/naruto.jpg`,
			rating: 9,
		},
		{
			id: 'e2',
			title: 'Hunter x Hunter',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/hunterxhunter.jpg`,
			rating: 8,
		},
		{
			id: 'e3',
			title: 'Death Note',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/deathNote.jpg`,
			rating: 7,
		},
		{
			id: 'e4',
			title: 'Dr. House MD',
			imgURL: `${process.env.PUBLIC_URL}/assets/images/items/drHouse.jpg`,
			rating: 8,
		},
	];

	return (
		<div className='tvList'>
			<h2 className='tvList__header'>Your TV</h2>
			<div className='tvList__list'>
				<ListItems items={items} />
			</div>
		</div>
	);
};

export default TVList;
