import React, { Component, PropTypes } from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

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
		this.props.onRegister(this.state.email, this.state.password, this.state.confirmPassword);
		event.preventDefault();
	}

	render() {
		return (
			<form id="register-form" onSubmit={this._handleSubmit}>
				<h2>Sign up</h2>
				<FormGroup
					controlId="emailControl">
					<ControlLabel srOnly>Email address</ControlLabel>
					<FormControl
						type="email"
						value={this.state.email}
						onChange={this._handleChange}
						placeholder="Email address"
						name="email"
						required autoFocus />
				</FormGroup>
				<FormGroup
					controlId="passwordControl">
					<ControlLabel srOnly>Password</ControlLabel>
					<FormControl
						type="password"
						value={this.state.password}
						onChange={this._handleChange}
						placeholder="Password"
						name="password"
						required />
				</FormGroup>
				<FormGroup
					controlId="confirmPasswordControl">
					<ControlLabel srOnly>Confirm password</ControlLabel>
					<FormControl
						type="password"
						value={this.state.confirmPassword}
						onChange={this._handleChange}
						placeholder="Confirm password"
						name="confirmPassword"
						required />
				</FormGroup>

				<Button type="submit" bsStyle="primary" block>Sign up</Button>
			</form>
		);
	}
}

RegisterForm.propTypes = {
	onRegister: PropTypes.func.isRequired
};

export default RegisterForm;