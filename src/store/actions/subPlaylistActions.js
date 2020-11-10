import {
	LOAD_SUB_PLAYLISTS_STARTED,
	LOAD_SUB_PLAYLISTS_COMPLETED,
	LOAD_SUB_PLAYLISTS_FAILED,
	CLEAR_SUB_PLAYLISTS
} from './actionTypes'


// Action Creators:

const startSubPlaylistsLoading = () => { 
	return { type: LOAD_SUB_PLAYLISTS_STARTED }; 
}
const completedSubPlaylistsLoading = (subPlaylists) => {
	return { type:  LOAD_SUB_PLAYLISTS_COMPLETED, subPlaylists };
}
const failedSubPlaylistsLoading = (error) => {
	return { type: LOAD_SUB_PLAYLISTS_FAILED, error };
}

const clearSubPlaylists = () => {
	return { type: CLEAR_SUB_PLAYLISTS };
}


// Thunks (Sid Effects):

const loadSubPlaylists = () => {

	return (dispatch, getState, { dataService }) => {

		const auth = getState().firebase.auth;
		
		// make async call to DB
		dispatch(startSubPlaylistsLoading());
		dataService
			.fetchSubPlaylists(auth.uid)
			.then(subPlaylists => dispatch(completedSubPlaylistsLoading(subPlaylists)))
			.catch(error => dispatch(failedSubPlaylistsLoading(error)));

	};

};


export { clearSubPlaylists, loadSubPlaylists }