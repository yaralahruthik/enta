import TVList from '../components/TVList/TVList';
import TVFetchPopular from '../components/TVList/TVFetchPopular';
import TVFetchTopRated from '../components/TVList/TVFetchTopRated';
import TVFetchTrending from '../components/TVList/TVFetchTrending';

const TV = (props) => {
	return (
		<div className='tv'>
			{props.entaTVData.length === 0 && (
				<h3 className='tv__fallback'>Oops, you have watched nothing yet!</h3>
			)}
			{props.entaTVData.length > 0 && (
				<TVList
					title='Your TV'
					onRemove={props.onTVRemove}
					tvData={props.entaTVData}
				/>
			)}
			<TVFetchPopular {...props} />
			<TVFetchTopRated {...props} />
			<TVFetchTrending {...props} />
		</div>
	);
};

export default TV;
