import { clearSubPlaylists, loadSubPlaylists } from '../actions/subPlaylistActions';

// NOTE: Assync thunk middleware must be imported before this.
const authEventsMiddleware = storeAPI => next => action => {

	let result = next(action);
	let profile = storeAPI.getState().firebase.profile;

	switch(action.type)
	{
		case '@@reactReduxFirebase/SET_PROFILE':
			if(profile.isLoaded && profile.isEmpty === false){
				loadUserAppData(storeAPI);				
			}
			else {
				console.log('Error: Auth was complited, but profile is not loaded.');
			}
			break;

		case '@@reactReduxFirebase/LOGOUT':
			if(profile.isEmpty){
				clearUserAppData(storeAPI);				
			}
			else {
				console.log('Error: Logout was complited, but profile is not empty.');
			}
			break;

		default:
			break;
	}
	
	return result;

}


// Load all app. data which is related to user
const loadUserAppData = (storeAPI) => {

	// 1. Load SubPlayists async
	storeAPI.dispatch(loadSubPlaylists());

}

// Clear all app. data which is related to user
const clearUserAppData = (storeAPI) => {

	// 1. Clear SubPlayists store
	storeAPI.dispatch(clearSubPlaylists());

}


export default authEventsMiddleware;