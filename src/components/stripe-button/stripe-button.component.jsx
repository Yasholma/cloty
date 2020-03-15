import React from "react";
import StripCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = "pk_test_Y0WwvJg0rWHtwRAO7CRqACnL";

	const onToken = token => {
		console.log(token);
		alert("Payment success");
	};

	return (
		<StripCheckout
			label="Pay Now"
			name="Cloty Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total price is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
