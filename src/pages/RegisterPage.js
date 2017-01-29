import React, {Component} from 'react';

import RegisterForm from '../components/RegisterForm';

import {app} from '../lib/WebApi';

class RegisterPage extends Component {
	constructor(props) {
		super(props);

		this._onRegistration = this._onRegistration.bind(this);
	}

	_onRegistration(email, password) {
		const userService = app.service('users');
		userService.create({
			email,
			password
		}).then((response) => console.log(response));


		console.log('Registered: ' + JSON.stringify({email, password}));
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-offset-4 col-xs-4">
						<RegisterForm onRegister={this._onRegistration} />
					</div>
				</div>
			</div>
		);
	}
}

export default RegisterPage;