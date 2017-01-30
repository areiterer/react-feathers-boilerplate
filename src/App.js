import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/actions';

import './App.css';

import Header from './components/Header';

const App = (props) => (
	<div className="App">
		<Header
			loggedIn={props.loggedIn}
			onLogin={props.login}
			onLogout={props.logout}
		/>
		{props.children}
	</div>
);

App.propTypes = {
	loggedIn: PropTypes.bool.isRequired,
	logout: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return {
		loggedIn: state.loggedIn
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => {
			dispatch(actions.logout());
		}
	}
};

export { App };
export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);