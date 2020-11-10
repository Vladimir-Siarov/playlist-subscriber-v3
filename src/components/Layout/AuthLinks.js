import React from "react";
import {isEmpty, isLoaded, useFirebase} from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import {useSelector} from "react-redux";

const AuthLinks = () => {
	const auth = useSelector(state => state.firebase.auth);
	const firebase = useFirebase();
	const history = useHistory();

	const signInWithGoogle = () => {
		firebase
				.login({
					provider: "google",
					type: "popup",
				})
				.then(() => {
					history.push("/subscriptions");
				});
	}
	const signOut = () => {
		firebase
				.logout()
				.then(() => {
					history.push("/");
				});
	}

	return (
			<div>
				{ isLoaded(auth) && isEmpty(auth) && <button
						onClick={(event) => {
							event.preventDefault();
							signInWithGoogle();
						}}
				>
					Sign In with Google
				</button> }

				{ isLoaded(auth) && !isEmpty(auth) && <button
						onClick={(event) => {
							event.preventDefault();
							signOut();
						}}
				>
					Logout
				</button> }
			</div>
	);
}

export default AuthLinks;