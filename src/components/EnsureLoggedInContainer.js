import { Component } from 'react';
import { browserHistory } from 'react-router';

import { app } from '../lib/WebApi';

class EnsureLoggedInContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: false
		}
	}

	componentDidMount() {
		app.authenticate().then(() =>
				this.setState({ isLoggedIn: true })
			)
			.catch(error => {
				if (error.code === 401) {
					browserHistory.replace('/login');
				}
			})
	}

	render() {
		return this.state.isLoggedIn
			? this.props.children
			: null
	}
}

export default EnsureLoggedInContainer;