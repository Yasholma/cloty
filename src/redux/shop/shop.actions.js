import ShopActionTypes from "./shop.types";
import {
	convertCollectionsSnapshotToMap,
	firestore
} from "./../../firebase/firebase.utils";

const isFetchingCollectionsStart = () => ({
	type: ShopActionTypes.FETCHING_COLLECTIONS_START
});

const isFetchingCollectionsSuccess = collectionsMap => ({
	type: ShopActionTypes.FETCHING_COLLECTIONS_SUCCESS,
	payload: collectionsMap
});

const isFetchingCollectionsFailed = errorMessage => ({
	type: ShopActionTypes.FETCHING_COLLECTIONS_FAILED,
	payload: errorMessage.message
});

export const isFetchingCollectionsAsync = () => dispatch => {
	const collectionRef = firestore.collection("collections");

	dispatch(isFetchingCollectionsStart());

	collectionRef
		.get()
		.then(snapshot => {
			const doc = convertCollectionsSnapshotToMap(snapshot);
			dispatch(isFetchingCollectionsSuccess(doc));
		})
		.catch(errorMessage =>
			dispatch(isFetchingCollectionsFailed(errorMessage))
		);
};
