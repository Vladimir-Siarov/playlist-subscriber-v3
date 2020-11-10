import React from 'react';
//import { Link } from 'react-router-dom';

const NavBar = ({ isLoading, isAuthenticated, auth, signInWithGoogle, logout }) => {

	const onSignInBtnClick = (event) => {

		event.preventDefault();
		signInWithGoogle();
	}

	const onLogoutBtnClick = (event) => {

		event.preventDefault();
		logout();
	}

	return (
		<nav>

			{/* Profile section */}
			<section>
				{
					isLoading && <span>Initializing...</span>
				}

				{
					!isLoading && !isAuthenticated
					&& <button onClick={ onSignInBtnClick }>Sign In with Google</button>
				}

				{
					!isLoading && isAuthenticated
					&& <h4>User Name</h4>
					&& <button onClick={ onLogoutBtnClick }>Logout</button>
				}

			</section>

		</nav>
	);

}

export default NavBar;