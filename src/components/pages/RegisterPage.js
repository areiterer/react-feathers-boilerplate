import React, { PropTypes } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';

import RegisterForm from '../RegisterForm';

import * as actions from '../../actions/actions';


const RegisterPage = (props) => (
	<Grid>
		<Row>
			<Col xs={8} xsOffset={2} sm={6} smOffset={3} md={4} mdOffset={4} lg={4} lgOffset={4}>
				<RegisterForm onRegister={props.register}/>
			</Col>
		</Row>
	</Grid>
);

RegisterPage.propTypes = {
	register: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
	return {
		register: (email, password, confirmPassword) => {
			dispatch(actions.register(email, password, confirmPassword));
		}
	}
};

export { RegisterPage };
export const RegisterPageContainer = connect(null, mapDispatchToProps)(RegisterPage);