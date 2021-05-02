import Home from './pages/Home';
import Movies from './pages/Movies';
import TV from './pages/TV';
import About from './pages/About';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/styles.scss';
import 'normalize.css'

function App() {
  return (
		<BrowserRouter>
			<div className='body'>
				<Header />
				<div className='body__content'>
					<Switch>
						<Route path='/' component={Home} exact={true} />
						<Route path='/movies' component={Movies} />
						<Route path='/tv' component={TV} />
						<Route path='/about' component={About} />
						<Route path='/login' component={Login} />
						<Route component={NotFound} />
					</Switch>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;