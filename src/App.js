import Home from './pages/Home';
import Movies from './pages/Movies';
import TV from './pages/TV';
import NotFound from './pages/NotFound';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/styles.scss';
import 'normalize.css'

function App() {
  return (
		<BrowserRouter>
			<div>
				<Header />
				<Switch>
					<Route path='/' component={Home} exact={true} />
					<Route path='/movies' component={Movies} />
					<Route path='/tv' component={TV} />
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;