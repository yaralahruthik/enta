import broken from '../images/giphy.gif';

const NotFound = () => {
  return (
		<div className='notFound'>
			<h1>404</h1>
      <img src={broken} alt="What are you doing here?"/>
		</div>
	);
}

export default NotFound;