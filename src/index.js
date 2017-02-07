import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';

import rootReducer from './reducers/reducer';

import { AppContainer } from './App';
import IndexPage from './components/pages/IndexPage';
import { LoginPageContainer } from './components/pages/LoginPage';
import { RegisterPageContainer } from './components/pages/RegisterPage';
import ArticlesPage from './components/pages/ArticlesPage';

import EnsureLoggedInContainer from './components/EnsureLoggedInContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import './index.css';

const NotFound = () => (
	<h1>404.. This page is not found!</h1>)

let loggerMiddleware = createLogger();

let store = createStore(
	rootReducer,
	applyMiddleware(
		thunkMiddleware, // dispatch() functions
		loggerMiddleware // log actions
	)
);

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={ AppContainer }>
				<IndexRoute component={IndexPage}/>
				<Route path="login" component={LoginPageContainer}/>
				<Route path="register" component={RegisterPageContainer}/>
				<Route component={EnsureLoggedInContainer}>
					<Route path="articles" component={ArticlesPage}/>
				</Route>
				<Route path="*" component={NotFound} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);

// TODO: Not found route!