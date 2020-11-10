class AuthService {
	
	#getFirebase;	

	constructor(getFirebase){
		this.#getFirebase = getFirebase;
	}
	
	#_firestore = null;
	#getFirestore =  () => {
		
		if(this.#_firestore == null){
			this.#_firestore = this.#getFirebase().firestore();
		}

		return this.#_firestore;
	}

	
	fetchSubPlaylists(userUid) {
		
		return new Promise((resolve, reject) => {
			
			// make async call to DB
			this.#getFirestore()
				.collection("/subscriptions_playlists")
				.where('user_uid', '==', userUid)
				//.orderBy('created')
				.get()
				.then(snapshot => {	

					const subPlaylists = snapshot.docs.map(doc => doc.data().playlist);
					resolve(subPlaylists);
				})
				.catch(reject);
			
		});

	}
}

export default AuthService;