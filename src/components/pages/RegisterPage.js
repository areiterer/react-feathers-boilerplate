import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import RegisterForm from '../RegisterForm';

import * as actions from '../../actions/actions';


const RegisterPage = (props) => (
	<div className="container">
		<div className="row">
			<div className="col-xs-offset-4 col-xs-4">
				<RegisterForm onRegister={props.register}/>
			</div>
		</div>
	</div>
);

RegisterPage.propTypes = {
	register: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
	return {
		register: (email, password) => {
			dispatch(actions.register(email, password));
		}
	}
};

export { RegisterPage };
export const RegisterPageContainer = connect(null, mapDispatchToProps)(RegisterPage);