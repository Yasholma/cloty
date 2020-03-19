import UserTypes from "./user.types";

export const googleSignInStart = () => ({
	type: UserTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = emailAndPassword => ({
	type: UserTypes.EMAIL_SIGN_IN_START,
	payload: emailAndPassword
});

export const signInSuccess = user => ({
	type: UserTypes.SIGN_IN_SUCCESS,
	payload: user
});

export const signInFailed = error => ({
	type: UserTypes.SIGN_IN_FAILED,
	payload: error
});

export const checkUserSession = () => ({
	type: UserTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
	type: UserTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
	type: UserTypes.SIGN_OUT_SUCCESS
});

export const signOutFailed = error => ({
	type: UserTypes.SIGN_OUT_FAILED,
	payload: error
});

export const signUpStart = displayNameAndEmailAndPassword => ({
	type: UserTypes.SIGN_UP_START,
	payload: displayNameAndEmailAndPassword
});

export const signUpSuccess = () => ({
	type: UserTypes.SIGN_UP_SUCCESS
});
export const signUpFailed = error => ({
	type: UserTypes.SIGN_UP_FAILED,
	payload: error
});
