import {
	LOAD_SUB_PLAYLISTS_STARTED,
	LOAD_SUB_PLAYLISTS_COMPLETED,
	LOAD_SUB_PLAYLISTS_FAILED,
	CLEAR_SUB_PLAYLISTS
} from '../actions/actionTypes';

const initState = {
	playlists: [
		{ id: '111', title: 'playlist 1' },
		{ id: '222', title: 'playlist 2' },
		{ id: '333', title: 'playlist 3' },
	],
	isLoading: false
}

const subPlaylistReducer = (state = initState, action) => {

	switch(action.type){

		case LOAD_SUB_PLAYLISTS_STARTED:
			return {
				...state,
				isLoading: true
			};

		case LOAD_SUB_PLAYLISTS_COMPLETED:
			//console.log('Loading SubPlaylists was completed', action);
			return {
				...state,
				isLoading: false,
				playlists: action.subPlaylists
			};

		case LOAD_SUB_PLAYLISTS_FAILED:
			console.log('Loading SubPlaylists was failed', action.error);
			return {
				...state,
				isLoading: false
			};

		case CLEAR_SUB_PLAYLISTS:
			return {
				...state,
				playlists: []
			};

		default:
			return state;
	}

}

export default subPlaylistReducer;