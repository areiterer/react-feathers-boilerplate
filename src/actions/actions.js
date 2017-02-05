import { browserHistory } from 'react-router';
import { NotificationManager } from 'react-notifications';

import * as t from './actionTypes';
import { app } from '../lib/WebApi';

/*
 * Set the "sending request" flag in state.
 * Can be used to show a spinner or something
 */
export function setSendingRequest(isSending) {
	return {
		type: t.SENDING_REQUEST,
		isSending
	}
}

/*
 * Set the current login state of the user
 */
export function setLoginState(loginState) {
	return {
		type: t.SET_LOGIN_STATE,
		loginState
	}
}

/*
 * Forward the user to a certain target location
 */
export function forwardTo(target) {
	browserHistory.push(target);
}

/*
 * User Login and forward to /articles
 */
export function login(email, password) {
	return (dispatch) => {
		dispatch(setSendingRequest(true));

		if (anyElementsEmpty({ email, password })) {
			dispatch(setSendingRequest(false));
			NotificationManager.error('Please provide username and password', 'Sign in');
		}

		app.authenticate({
			type: 'local',
			email,
			password
		}).then(() => {
			dispatch(setSendingRequest(false));
			dispatch(setLoginState(true));

			NotificationManager.success('You have been successfully signed in.', 'Sign in');

			forwardTo('/articles');
		}).catch((error) => {
			dispatch(setSendingRequest(false));
			NotificationManager.error(error.message, 'Sign in unsuccessful');
		});
	}
}

/*
 * User Logout and forward to index page
 */
export function logout() {
	return (dispatch) => {
		dispatch(setSendingRequest(true));

		app.logout().then(() => {
			dispatch(setSendingRequest(false));
			dispatch(setLoginState(false));

			NotificationManager.success('You have been successfully logged out.', 'Logout successful');

			forwardTo('/');
		}).catch((error) => {
			dispatch(setSendingRequest(false));
			NotificationManager.error(error.message, 'Logout failed');
		})
	}
}

/*
 * Sign up a new user and forward to /login
 */
export function register(email, password, confirmPassword) {
	return (dispatch) => {
		dispatch(setSendingRequest(true));

		if (anyElementsEmpty({ email, password, confirmPassword })) {
			dispatch(setSendingRequest(false));
			NotificationManager.error('Please provide all mandatory information.', 'Sign up');
			return;
		}

		if (password !== confirmPassword) {
			dispatch(setSendingRequest(false));
			NotificationManager.error('Password and confirmation do not match.', 'Sign up');
			return;
		}

		const userService = app.service('users');
		userService.create({
				email,
				password
			})
			.then((response) => {
				dispatch(setSendingRequest(false));

				NotificationManager.info('Please sign in first');

				forwardTo('/login');
			})
			.catch((error) => {
				dispatch(setSendingRequest(false));
				NotificationManager.error(error.message, 'Sign up unsuccessful');
			});
	}
}

function anyElementsEmpty(elements) {
	for (let element in elements) {
		if (!elements[element]) {
			return true;
		}
	}
	return false;
}