class AuthService {

	#getFirebase;
	
	constructor(getFirebase){
		this.#getFirebase = getFirebase;
	}


	signInWithGoogle = () => {		
		
		return this.#getFirebase().login({
				provider: "google",
				type: "popup",
			});
			
	}

	logout = () => {

		return this.#getFirebase().logout();

	}
}

export default AuthService;