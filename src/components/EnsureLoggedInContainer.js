import { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import {app} from '../lib/WebApi';

class EnsureLoggedInContainer extends Component {
	componentDidMount() {
		app.authenticate().then(() =>
				this.props.setLoginState(true)
			)
			.catch(error => {
				if (error.code === 401)
					browserHistory.replace('/login');
			})
	}

	render() {
		return this.props.isLoggedIn
			? this.props.children
			: null
	}
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.loggedIn
	}
};

EnsureLoggedInContainer = connect(mapStateToProps, null)(EnsureLoggedInContainer);

export default EnsureLoggedInContainer;