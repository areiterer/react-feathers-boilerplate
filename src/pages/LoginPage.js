import React, { Component } from 'react';

import LoginForm from '../components/LoginForm';

class LoginPage extends Component {
	constructor(props) {
		super(props);

		this._login = this._login.bind(this);
	}

	_login(username, password, rememberMe) {
		console.log('Logging in: '+ JSON.stringify({username, password, rememberMe}));
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-offset-4 col-xs-4">
						<LoginForm onLogin={this._login} />
					</div>
				</div>
			</div>
		);
	}
}

export default LoginPage;