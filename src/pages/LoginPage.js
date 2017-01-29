import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

import { app } from '../lib/WebApi';

class LoginPage extends Component {
	constructor(props) {
		super(props);

		this._login = this._login.bind(this);
	}

	static get contextTypes() {
		return {
			router: React.PropTypes.object.isRequired
		}
	}

	_login(email, password) {
		app.authenticate({
			type: 'local',
			email,
			password
		}).then((response) => this.context.router.push('/'));
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-offset-4 col-xs-4">
						<LoginForm onLogin={this._login}/>
					</div>
				</div>
			</div>
		);
	}
}

export default LoginPage;