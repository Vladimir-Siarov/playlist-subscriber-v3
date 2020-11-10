import { combineReducers } from 'redux';
import {firebaseReducer} from "react-redux-firebase";
import { firestoreReducer } from 'redux-firestore';

//import authReducer from './authReducer';
import subPlaylistReducer from './subPlaylistReducer';

const rootReducer = combineReducers({

	//auth: authReducer,
	subPlaylist: subPlaylistReducer,
	firebase: firebaseReducer,
	firestore: firestoreReducer

});

export default rootReducer