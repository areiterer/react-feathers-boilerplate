import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import App from './App';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ArticlesPage from './pages/ArticlesPage';

import EnsureLoggedInContainer from './components/EnsureLoggedInContainer';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={IndexPage}/>
			<Route path="login" component={LoginPage}/>
			<Route path="register" component={RegisterPage}/>
			<Route component={EnsureLoggedInContainer}>
				<Route path="articles" component={ArticlesPage} />
			</Route>
		</Route>
	</Router>,
	document.getElementById('root')
);
