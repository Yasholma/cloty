import UserTypes from "./user.types";

const INITIAL_STATE = {
	currentUser: null,
	error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserTypes.SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				error: null
			};
		case UserTypes.SIGN_OUT_SUCCESS:
			return {
				...state,
				currentUser: null,
				error: null
			};
		case UserTypes.SIGN_IN_FAILED:
		case UserTypes.SIGN_OUT_FAILED:
		case UserTypes.SIGN_UP_FAILED:
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
};

export default userReducer;
