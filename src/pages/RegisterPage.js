import React, {Component} from 'react';

import RegisterForm from '../components/RegisterForm';

class RegisterPage extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-offset-4 col-xs-4">
						<RegisterForm />
					</div>
				</div>
			</div>
		);
	}
}

export default RegisterPage;