import React from "react";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
	const { imageUrl, name, price, quantity } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="Cart Item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">{quantity}</span>
			<span className="price">{price}</span>
			<div className="remove-button">&#10005;</div>
		</div>
	);
};

export default CheckoutItem;