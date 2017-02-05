import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { NotificationContainer } from 'react-notifications';

import { connect } from 'react-redux';
import * as actions from './actions/actions';

import { app } from './lib/WebApi';

import './App.css';

import Header from './components/Header';

class App extends Component {
	componentDidMount() {
		app.authenticate().then(() =>
				this.props.setLoginState(true)
			)
			.catch(error => {
				if (error.code === 401) {
					browserHistory.replace('/login');
				}
			})
	}

	render() {
		return (
			<div className="App">
				<Header
					loggedIn={this.props.loggedIn}
					onLogout={this.props.logout}
				/>
				{this.props.children}
				<NotificationContainer/>
			</div>
		);
	}
}


App.propTypes = {
	loggedIn: PropTypes.bool.isRequired,
	logout: PropTypes.func.isRequired,
	setLoginState: PropTypes.func.isRequired
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
		},
		setLoginState: (loggedIn) => {
			dispatch(actions.setLoginState(loggedIn));
		}
	}
};

export { App };
export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);