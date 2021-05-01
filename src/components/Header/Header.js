import { Link } from 'react-router-dom';

const Header = () => {
  return (
		<div className='header'>
			<div className='container'>
				<Link to='/' className='header__title'>Enta</Link>
				<div className='header__links'>
					<ul>
						<li>
							<Link to='/movies' className='header__link'>Movies</Link>
						</li>
						<li>
							<Link to='/tv' className='header__link'>TV</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Header;