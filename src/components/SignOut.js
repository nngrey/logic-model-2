import React, { Component } from 'react';

export default class SignOut extends React.Component {

  componentWillMount(){
    if(this.props.mappedAuthState.authenticated){
      this.signOut();
    }
    this.props.router.push('/sign-in');
  }

  signOut = () => {
    this.props.mappedSignOut();
  }

  render() {
    return (<div></div>);
  }
}
