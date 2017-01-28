import React, {Component} from 'react';

class RegisterForm extends Component {
	render() {
		return (
			<form id="register-form">
				<h2>Registration</h2>
				<div className="form-group">
					<label htmlFor="inputUsername" className="sr-only">Username</label>
					<input type="text" id="inputUsername" tabIndex="1" className="form-control" placeholder="Username" required autoFocus />
				</div>
				<div className="form-group">
					<label htmlFor="inputEmail" className="sr-only">Email address</label>
					<input type="email" id="inputEmail" tabIndex="2" className="form-control" placeholder="Email address" required />
				</div>
				<div className="form-group">
					<label htmlFor="inputPassword" className="sr-only">Password</label>
					<input type="password" id="inputPassword" tabIndex="2" className="form-control" placeholder="Password" />
				</div>
				<div className="form-group">
					<label htmlFor="inputConfirmPassword" className="sr-only">Confirm Password</label>
					<input type="password" id="inputConfirmPassword" tabIndex="2" className="form-control" placeholder="Confirm Password" />
				</div>
				<div className="form-group">
					<div className="row">
						<div className="col-sm-6 col-sm-offset-3">
							<button className="btn btn-lg btn-success btn-block" type="submit">Register now</button>
						</div>
					</div>
				</div>
			</form>
		);
	}
}

export default RegisterForm;