import { isLoaded, isEmpty } from "react-redux-firebase";
import { connect } from 'react-redux';

import { signInWithGoogle, logout } from '../../store/actions/authActions';
//import { loadSubPlaylists } from '../../store/actions/subPlaylistActions'

import NavBar from '../Layout/NavBar';


const mapStateToProps = (state) => {
	return {
		isLoading: !isLoaded(state.firebase.auth),
		isAuthenticated: !isEmpty(state.firebase.auth),
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		// signInWithGoogle: () => dispatch(signInWithGoogle(() => {
		// 	dispatch(loadSubPlaylists())
		// })),
		signInWithGoogle: () => dispatch(signInWithGoogle()),
		logout: () => dispatch(logout())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);