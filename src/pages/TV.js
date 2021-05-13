import TVList from '../components/TVList/TVList';
import FetchTV from '../components/Fetch/FetchTV';

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
			<FetchTV url={props.tvAPI.popularTV} fetchTitle='Popular TV' {...props} />
			<FetchTV
				url={props.tvAPI.topRatedTV}
				fetchTitle='Top Rated TV'
				{...props}
			/>
			<FetchTV
				url={props.tvAPI.trendingTV}
				fetchTitle='Trending TV'
				{...props}
			/>
		</div>
	);
};

export default TV;
