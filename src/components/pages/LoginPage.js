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
	login: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
	return {
		login: (email, password) => {
			dispatch(actions.login(email, password));
		}
	}
};

export { LoginPage };
export const LoginPageContainer = connect(null, mapDispatchToProps)(LoginPage);