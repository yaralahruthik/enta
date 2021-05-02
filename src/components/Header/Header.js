import { Link } from 'react-router-dom';

const Header = () => {
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