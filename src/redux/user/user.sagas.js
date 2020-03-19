import { takeLatest, put, call, all } from "redux-saga/effects";
import UserTypes from "./user.types";
import {
	auth,
	googleProvider,
	createUserProfileDocument,
	getCurrentUser
} from "../../firebase/firebase.utils";
import {
	signInSuccess,
	signInFailed,
	signOutFailed,
	signOutSuccess,
	signUpFailed,
	signUpSuccess
} from "./user.actions";

export function* getSnapshotFromUserAuth(userAuth) {
	try {
		const userRef = yield call(createUserProfileDocument, userAuth);
		const userSnapshot = yield userRef.get();
		yield put(
			signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
		);
	} catch (error) {
		yield put(signInFailed(error));
	}
}

export function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(signInFailed(error));
	}
}

export function* signInWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(signInFailed(error));
	}
}

export function* isUserAuthenticated() {
	try {
		const userAuth = yield getCurrentUser();
		if (!userAuth) return;
		yield getSnapshotFromUserAuth(userAuth);
	} catch (error) {
		yield put(signInFailed(error));
	}
}

export function* signOut() {
	try {
		yield auth.signOut();
		yield put(signOutSuccess());
	} catch (error) {
		yield put(signOutFailed(error.message));
	}
}

export function* signUp({ payload: { displayName, email, password } }) {
	try {
		const { user } = yield auth.createUserWithEmailAndPassword(
			email,
			password
		);

		yield createUserProfileDocument(user, { displayName });
		yield put(signUpSuccess());
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(signUpFailed(error));
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest(UserTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
	yield takeLatest(UserTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
	yield takeLatest(UserTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
	yield takeLatest(UserTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
	yield takeLatest(UserTypes.SIGN_UP_START, signUp);
}

export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onCheckUserSession),
		call(onSignOutStart),
		call(onSignUpStart)
	]);
}
