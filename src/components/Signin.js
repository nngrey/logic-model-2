import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Signin extends Component {
  submit = (values) => {
    console.log(values);
  }

  signIn = (values) => {
    this.props.mappedSignIn(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="form">
        <div className="container">
          <h2>Sign In</h2>
          <form onSubmit={ handleSubmit(this.signIn) }>
            <Field name="email"
                  component="input"
                  type="text"
                  placeholder="Email"
            />
            <Field name="password"
                  component="input"
                  type="password"
                  placeholder="Password"
            />
            <button type="submit" className="blue">Sign In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'signin'
})(Signin);
