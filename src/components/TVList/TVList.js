import ListItems from '../UI/ListItems';

const TVList = (props) => {
	return (
		<div className='tvList'>
			<h2 className='tvList__header'>Your TV</h2>
			<div className='tvList__list'>
				<ListItems onRemove={props.onRemove} items={props.tvData} />
			</div>
		</div>
	);
};

export default TVList;
