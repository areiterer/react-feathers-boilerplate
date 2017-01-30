import React, { PropTypes } from 'react';
import LoginForm from '../LoginForm';

import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

const LoginPage = (props) => (
	<div className="container">
		<div className="row">
			<div className="col-xs-offset-4 col-xs-4">
				<LoginForm onLogin={props.login}/>
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

const mapDispatchToProps = (dispatch) => {
	return {
		login: (email, password) => {
			dispatch(actions.login(email, password));
		}
	}
};

export { LoginPage };
export const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);