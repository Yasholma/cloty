import React, { useState } from "react";
import { connect } from "react-redux";

import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "./../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.actions";

const SignUp = ({ signUpStart }) => {
	const [userCredentials, setUserCredentials] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: ""
	});

	const { displayName, email, password, confirmPassword } = userCredentials;

	const handleSubmit = async e => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}

		signUpStart(displayName, email, password);
	};

	const handleChange = e => {
		const { value, name } = e.target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className="sign-up">
			<h2 className="title">I do not have an account</h2>
			<span>Sign up with your email and password</span>

			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={displayName}
					onChange={handleChange}
					required
					label="Display Name"
				/>
				<FormInput
					type="email"
					name="email"
					value={email}
					onChange={handleChange}
					required
					label="Email"
				/>
				<FormInput
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
					required
					label="Password"
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					onChange={handleChange}
					required
					label="Confirm Password"
				/>
				<CustomButton type="submit">SIGN UP</CustomButton>
			</form>
		</div>
	);
};

const mapStateToProps = dispatch => ({
	signUpStart: (displayName, email, password) =>
		dispatch(signUpStart({ displayName, email, password }))
});

export default connect(null, mapStateToProps)(SignUp);
