import FetchVideo from '../Fetch/FetchVideo';
import ListItems from '../UI/ListItems';

import { useState } from 'react';

const TVList = (props) => {
	const [modalShow, setModalShow] = useState(false);
	const [id, setID] = useState('');

	const imageClickHandler = (item) => {
		setModalShow(true);
		setID(item.id);
	};

	return (
		<div className='tvList'>
			<h2 className='tvList__header'>{props.title}</h2>
			<div className='listItems__video'>
				{modalShow && <FetchVideo mediaType='tv' id={id} />}
			</div>
			<div className='tvList__list'>
				<ListItems
					imageClickHandler={imageClickHandler}
					onRemove={props.onRemove}
					items={props.tvData}
				/>
			</div>
		</div>
	);
};

export default TVList;
