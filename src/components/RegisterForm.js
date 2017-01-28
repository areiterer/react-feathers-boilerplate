import React, { Component, PropTypes } from 'react';

class RegisterForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			confirmPassword: ''
		};

		this._handleSubmit = this._handleSubmit.bind(this);
		this._handleChange = this._handleChange.bind(this);
	}

	_handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	_handleSubmit(event) {
		// TODO: check password and confirm password

		this.props.onRegister(this.state.email, this.state.password);

		event.preventDefault();
	}

	render() {
		return (
			<form id="register-form" onSubmit={this._handleSubmit}>
				<h2>Registration</h2>
				<p>{JSON.stringify(this.state)}</p>
				<div className="form-group">
					<label htmlFor="inputEmail" className="sr-only">Email address</label>
					<input type="email" id="inputEmail" name="email" tabIndex="2"
					       className="form-control" placeholder="Email address"
					       value={this.state.email} onChange={this._handleChange}
					       required/>
				</div>
				<div className="form-group">
					<label htmlFor="inputPassword" className="sr-only">Password</label>
					<input type="password" id="inputPassword" name="password" tabIndex="2"
					       className="form-control" placeholder="Password"
					       value={this.state.password} onChange={this._handleChange}
					       required/>
				</div>
				<div className="form-group">
					<label htmlFor="inputConfirmPassword" className="sr-only">Confirm Password</label>
					<input type="password" id="inputConfirmPassword" name="confirmPassword" tabIndex="2"
					       className="form-control" placeholder="Confirm Password"
					       value={this.state.confirmPassword} onChange={this._handleChange}
					       required/>
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

RegisterForm.propTypes = {
	onRegister: PropTypes.func.isRequired
};

export default RegisterForm;