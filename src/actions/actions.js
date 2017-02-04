import { browserHistory } from 'react-router';

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

		// TODO: Error handling (email, password === undefined)

		app.authenticate({
			type: 'local',
			email,
			password
		}).then(() => {
			dispatch(setSendingRequest(false));
			dispatch(setLoginState(true));

			forwardTo('/articles');
		}).catch((error) => {
			//TODO: better! (set a error message box somewhere)
			console.log('ERROR: ' + error);
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

			forwardTo('/');
		}).catch((error) => {
			//TODO: better! (set a error message box somewhere)
			console.log('ERROR: ' + error);
		})
	}
}

export function register(email, password) {
	return (dispatch) => {
		dispatch(setSendingRequest(true));

		// TODO: Error handling (email, password === undefined)
		const userService = app.service('users');
		userService.create({
				email,
				password
			})
			.then((response) => {
				dispatch(setSendingRequest(false));
				forwardTo('/login');
			})
			.catch((error) => {
				//TODO: better! (set a error message box somewhere)
				console.log('ERROR: ' + error);
			});
	}
}