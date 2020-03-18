import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { isFetchingCollectionsAsync } from "./../../redux/shop/shop.actions";
import CollectionOverviewContainer from "./../../components/collections-overview/collections-overview-container";
import CollectionPageContainer from "./../collection/collection.container";

class ShopPage extends React.Component {
	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { fetchCollectionsAsync } = this.props;
		fetchCollectionsAsync();
	}

	render() {
		const { match } = this.props;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					component={CollectionOverviewContainer}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPageContainer}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	fetchCollectionsAsync: () => dispatch(isFetchingCollectionsAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
