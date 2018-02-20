import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Register extends Component {

  register = (values) => {
    if (values.password === values['password-confirmation']){
      const formData = new FormData();
      formData.append('email', values.email);
      formData.append('password', values.password);
      this.props.mappedRegister(formData);
    } else {
      return alert("Password does not match");
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="form">
        <div className="container">
          <h2>Register</h2>
          <form onSubmit={ handleSubmit(this.register) }>
            <p>
              <Field name="email"
                    component="input"
                    type="text"
                    placeholder="Email"
              />
            </p>
            <p>
              <Field name="password"
                    component="input"
                    type="password"
                    placeholder="Password"
              />
            </p>
            <p>
            <Field name="password-confirmation"
                  component="input"
                  type="password"
                  placeholder="Confirm Password"
            />
            </p>
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
