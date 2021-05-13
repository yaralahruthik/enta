import Home from '../pages/Home';
import Movies from '../pages/Movies';
import TV from '../pages/TV';
import About from '../pages/About';
import Login from '../pages/Login';
import Search from '../pages/Search';
import NotFound from '../pages/NotFound';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = (props) => {
	return (
		<BrowserRouter>
			<div className='body'>
				<Header currentUser={props.currentUser} onSearch={props.onSearch} />
				<div className='body__content'>
					<Switch>
						<Route path='/' exact={true}>
							<Home
								API={props.API}
								entaMovieData={props.appMoviesData}
								entaTVData={props.appTVData}
								duplicates={props.duplicates}
								onMovieAdd={props.onAddMovie}
								onMovieRemove={props.onRemoveMovie}
								onTVAdd={props.onAddTV}
								onTVRemove={props.onRemoveTV}
							/>
						</Route>
						<Route path='/movies'>
							<Movies
								movieAPI={props.API.movies}
								entaMovieData={props.appMoviesData}
								duplicates={props.duplicates}
								onMovieAdd={props.onAddMovie}
								onMovieRemove={props.onRemoveMovie}
							/>
						</Route>
						<Route path='/tv'>
							<TV
								tvAPI={props.API.tv}
								entaTVData={props.appTVData}
								duplicates={props.duplicates}
								onTVAdd={props.onAddTV}
								onTVRemove={props.onRemoveTV}
							/>
						</Route>
						<Route path='/search'>
							<Search
								onTVAdd={props.onAddTV}
								onTVRemove={props.onRemoveTV}
								onMovieAdd={props.onAddMovie}
								onMovieRemove={props.onRemoveMovie}
								searchData={props.appSearchData}
								duplicates={props.duplicates}
							/>
						</Route>
						<Route path='/about' component={About} />
						<Route path='/login'>
							<Login currentUser={props.currentUser} />
						</Route>
						<Route component={NotFound} />
					</Switch>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default AppRouter;
