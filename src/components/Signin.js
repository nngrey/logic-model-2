import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

class SignIn extends Component {

  componentDidUpdate(){
    if(this.props.mappedAuthState.authenticated){
      this.props.router.push('/logic-models');
    }
  }

  signIn = (values) => {
    const formData = new FormData();
    formData.append('signInEmail', values.email);
    formData.append('signInPassword', values.password);
    this.props.mappedSignIn(formData);
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
          <LinkContainer to={{ pathname: '/sign-in', query: {  } }}>
          <NavItem eventKey={1}>Register</NavItem>
          </LinkContainer>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'signin'
})(SignIn);
