import React, { Component } from 'react';

import LoginForm from '../components/LoginForm';

class LoginPage extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-offset-4 col-xs-4">
						<LoginForm />
					</div>
				</div>
			</div>
		);
	}
}

export default LoginPage;