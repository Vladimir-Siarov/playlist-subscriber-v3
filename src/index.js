import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware /*, compose*/ } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'

/* Firebase & Firestore */
import firebase from 'firebase/app';
//import 'firebase/database';
import 'firebase/firestore'
import 'firebase/auth'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance /*, getFirestore*/ } from 'redux-firestore';

import rootReducer from './store/reducers/rootReducer';
import fbConfig from './config/fbConfig';
//import { loadSubPlaylists } from './store/actions/subPlaylistActions';
import authEventsMiddleware from './store/middlewares/authEventsMiddleware';
import DataService from './services/dataService'
import AuthService from './services/authService'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const dataService = new DataService(getFirebase);
const authService = new AuthService(getFirebase);
const composedEnhancer = composeWithDevTools(
	applyMiddleware(
		thunkMiddleware.withExtraArgument({ dataService, authService }),
		authEventsMiddleware
	)
);
const store = createStore(rootReducer, composedEnhancer);

firebase.initializeApp(fbConfig);
firebase.firestore(); //.settings({ timestampsInSnapshots: true });


const rrfConfig = {
	userProfile: "users",
	useFirestoreForProfile: true,
}
const rrfProps = {
	firebase,
	config: rrfConfig, // fbConfig,
	dispatch: store.dispatch,
	createFirestoreInstance
}

ReactDOM.render(
  <React.StrictMode>
		<Provider store={store}>
			<ReactReduxFirebaseProvider {...rrfProps}>
				<App />
			</ReactReduxFirebaseProvider>
		</Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();