import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyCtMAz3Uo905eK2oF0nyfiB5bUyd_QZAPA",
	authDomain: "cloty-db.firebaseapp.com",
	databaseURL: "https://cloty-db.firebaseio.com",
	projectId: "cloty-db",
	storageBucket: "cloty-db.appspot.com",
	messagingSenderId: "700936249357",
	appId: "1:700936249357:web:f535da5933077e717bf544",
	measurementId: "G-W3NY97334R"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
