import React from "react";
import "./signin.styles.scss";

import { auth, signInWithGoogleMethod } from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="signin">
        <h3>I already have an account.</h3>
        <form className="signin__form" onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="Your email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Your password"
            value={password}
            onChange={this.handleChange}
            required
          />
          <div className="signin__buttons">
            <CustomButton
              type="submit"
              text="sign in"
              customStyle={{
                backgroundColor: "#282828",
                color: "#fefefe"
              }}
              onClick={this.handleChange}
            />
            <CustomButton
              text="sign in with google"
              customStyle={{
                backgroundColor: "rgba(205, 192, 152, 1)",
                color: "#282828"
              }}
              onClick={signInWithGoogleMethod}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
