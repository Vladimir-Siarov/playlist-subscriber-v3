//import { useHistory } from "react-router-dom";

import {
	LOGIN_STARTED, LOGIN_COMPLETED, LOGIN_FAILED,
	LOGOUT, LOGOUT_COMPLETED, LOGOUT_FAILED
} from './actionTypes';

export const signInWithGoogle = (callback) => {
	return (dispatch, getState, { authService}) => {

		//const history = useHistory();

		dispatch({ type: LOGIN_STARTED});
		authService
			.signInWithGoogle()
			.then(() => {
				dispatch({ type: LOGIN_COMPLETED});

				if(callback != null)
					callback();
				//history.push("/subscriptions");
			})
			.catch(err => {
				dispatch({ type: LOGIN_FAILED, error: err});
			});

	}
};

export const logout = () => {
	return (dispatch, getState, { authService}) => {

		//const history = useHistory();

		dispatch({ type: LOGOUT});

		authService
			.logout()
			.then(() => {
				dispatch({ type: LOGOUT_COMPLETED});
				//history.push("/");
			})
			.catch((err) => {
				dispatch({ type: LOGOUT_FAILED});
			});

	}
};
