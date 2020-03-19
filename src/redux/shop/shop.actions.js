import ShopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
	type: ShopActionTypes.FETCHING_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
	type: ShopActionTypes.FETCHING_COLLECTIONS_SUCCESS,
	payload: collectionsMap
});

export const fetchCollectionsFailed = errorMessage => ({
	type: ShopActionTypes.FETCHING_COLLECTIONS_FAILED,
	payload: errorMessage.message
});

// REDUX THUNK
// export const isFetchingCollectionsAsync = () => dispatch => {
// 	const collectionRef = firestore.collection("collections");

// 	dispatch(fetchCollectionsStart());

// 	collectionRef
// 		.get()
// 		.then(snapshot => {
// 			const doc = convertCollectionsSnapshotToMap(snapshot);
// 			dispatch(fetchCollectionsSuccess(doc));
// 		})
// 		.catch(errorMessage => dispatch(fetchCollectionsFailed(errorMessage)));
// };
