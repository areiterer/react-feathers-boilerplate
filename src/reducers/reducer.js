import * as t from '../actions/actionTypes';

const initialState = {
	currentlySending: false,
	loggedIn: false
};

export default function (state = initialState, action) {
	switch (action.type) {
		case t.SENDING_REQUEST:
			return Object.assign({}, state, { currentlySending: action.isSending });
		case t.SET_LOGIN_STATE:
			return Object.assign({}, state, { loggedIn: action.loginState });
		default:
			return state;
	}
}