import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/actions';

import './App.css';

import Header from './components/Header';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header
					loggedIn={this.props.loggedIn}
					onLogin={this.props.login}
					onLogout={this.props.logout}
				/>
				{this.props.children}
			</div>
		);
	}
}

App.propTypes = {
	loggedIn: PropTypes.bool.isRequired,
	login: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return {
		loggedIn: state.loggedIn
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		login: (email, password) => {
			dispatch(actions.login(email, password));
		},
		logout: () => {
			dispatch(actions.logout());
		}
	}
};

export { App };
export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);