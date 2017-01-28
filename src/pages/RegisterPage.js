import React, {Component} from 'react';

import RegisterForm from '../components/RegisterForm';

class RegisterPage extends Component {
	constructor(props) {
		super(props);

		this._onRegistration = this._onRegistration.bind(this);
	}

	_onRegistration(username, email, password) {
		console.log('Registered: ' + JSON.stringify({username, email, password}));
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