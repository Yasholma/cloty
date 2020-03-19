import React from "react";
import { connect } from "react-redux";

import "./sign-up.styles.scss";

import {
	auth,
	createUserProfileDocument
} from "./../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import CustomButton from "./../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.actions";

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: ""
		};
	}

	handleSubmit = async e => {
		e.preventDefault();
		const { signUpStart } = this.props;
		const { displayName, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}

		signUpStart(displayName, email, password);
	};

	handleChange = e => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="sign-up">
				<h2 className="title">I do not have an account</h2>
				<span>Sign up with your email and password</span>

				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						onChange={this.handleChange}
						required
						label="Display Name"
					/>
					<FormInput
						type="email"
						name="email"
						value={email}
						onChange={this.handleChange}
						required
						label="Email"
					/>
					<FormInput
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
						required
						label="Password"
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={this.handleChange}
						required
						label="Confirm Password"
					/>
					<CustomButton type="submit">SIGN UP</CustomButton>
				</form>
			</div>
		);
	}
}

const mapStateToProps = dispatch => ({
	signUpStart: (displayName, email, password) =>
		dispatch(signUpStart({ displayName, email, password }))
});

export default connect(null, mapStateToProps)(SignUp);
