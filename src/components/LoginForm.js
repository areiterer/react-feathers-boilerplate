import React, { Component, PropTypes } from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};

		this._handleLogin = this._handleLogin.bind(this);
		this._handleChange = this._handleChange.bind(this);
	}

	_handleLogin(event) {
		event.preventDefault();
		this.props.onLogin(this.state.email, this.state.password);
	}

	_handleChange(event) {
			this.setState({
				[event.target.name]: event.target.value
			})
	}

	render() {
		return (
			<form onSubmit={this._handleLogin}>
				<h2>Sign in</h2>
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
					  name="password" />
				</FormGroup>
				<Button type="submit" bsStyle="primary" block>Sign in</Button>
			</form>
		);
	}
}

LoginForm.propTypes = {
	onLogin: PropTypes.func.isRequired,
	action: PropTypes.string
};

export default LoginForm;