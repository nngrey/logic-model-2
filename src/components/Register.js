import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Register extends Component {
  submit = (values) => {
    console.log(values);
  }

  register = (values) => {
    console.log(values);
    const data = new FormData();
    data.append('email', values.email);
    data.append('password', values.password);
    data.append('passwordConf', values['password-confirmation']);
    this.props.mappedRegister(data);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="form">
        <div className="container">
          <h2>Register</h2>
          <form onSubmit={ handleSubmit(this.register) }>
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
            <Field name="password-confirmation"
                  component="input"
                  type="password"
                  placeholder="Confirm Password"
            />
            <button type="submit" className="blue">Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'register'
})(Register);
