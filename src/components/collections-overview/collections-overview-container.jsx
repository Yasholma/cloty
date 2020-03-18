import { connect } from "react-redux";
import { compose } from "redux";
import { isFetchingCollectionLoading } from "../../redux/shop/shop.selectors";

import WithSpinner from "./../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";
import { createStructuredSelector } from "reselect";

const mapStateToProps = createStructuredSelector({
	isLoading: isFetchingCollectionLoading
});

const CollectionOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionsOverview);

export default CollectionOverviewContainer;
