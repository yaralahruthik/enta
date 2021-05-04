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
				<Header />
				<div className='body__content'>
					<Switch>
						<Route path='/' exact={true}>
							<Home entaMovieData={props.appMoviesData} entaTVData={props.appTVData} />
						</Route>
						<Route path='/movies'>
							<Movies movieData={props.appMoviesData} />
						</Route>
						<Route path='/tv'>
							<TV tvData={props.appTVData} />
						</Route>
						<Route path='/search' component={Search} />
						<Route path='/about' component={About} />
						<Route path='/login' component={Login} />
						<Route component={NotFound} />
					</Switch>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default AppRouter;