import React, { Component, PropTypes } from 'react';
import LoginForm from '../components/LoginForm';

import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const LoginPage = () => (
	<div className="container">
		<div className="row">
			<div className="col-xs-offset-4 col-xs-4">
				<LoginForm onLogin={this.props.login}/>
			</div>
		</div>
	</div>
);

LoginPage.propTypes = {
	loggedIn: PropTypes.bool.isRequired,
	login: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	return {
		loggedIn: state.loggedIn
	}
}

export { LoginPage };
export const LoginPageContainer = connect(mapStateToProps, actions)(LoginPage);