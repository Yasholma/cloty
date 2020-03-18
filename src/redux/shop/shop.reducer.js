import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
	collections: null,
	isFetching: false,
	errorMessage: ""
};

const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ShopActionTypes.FETCHING_COLLECTIONS_START:
			return {
				...state,
				isFetching: true
			};
		case ShopActionTypes.FETCHING_COLLECTIONS_SUCCESS:
			return {
				...state,
				collections: action.payload,
				isFetching: false
			};
		case ShopActionTypes.FETCHING_COLLECTIONS_FAILED:
			return {
				...state,
				isFetching: true,
				errorMessage: action.payload
			};
		default:
			return state;
	}
};

export default shopReducer;
