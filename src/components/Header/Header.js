import { Link } from 'react-router-dom';

import SearchBar from '../UI/SearchBar';

const Header = (props) => {
  return (
		<div className='header'>
			<div className='container'>
				<Link to='/' className='header__title'>
					Enta
				</Link>
				<div className='header__links'>
					<ul>
						<li>
							<Link to='/movies'>Movies</Link>
						</li>
						<li>
							<Link to='/tv'>TV</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<SearchBar onSearch={props.onSearch} />
						</li>
					</ul>
				</div>
				<Link to='/login' className='header__login'>
					Login
				</Link>
			</div>
		</div>
	);
}

export default Header;