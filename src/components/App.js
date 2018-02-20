import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../styles/App.css';

export default class App extends React.Component {
  navbarLinks() {
    console.log(this.props);
    if (this.props.mappedAuthState.authenticated) {
      return (
        <Nav>
          <LinkContainer to={{ pathname: '/about', query: {  } }}>
             <NavItem eventKey={1}>About</NavItem>
          </LinkContainer>

          <LinkContainer to={{ pathname: '/sign-out', query: {  } }}>
             <NavItem eventKey={2}>Sign out</NavItem>
          </LinkContainer>
        </Nav>
      )
    }
    return (
      <Nav>
        <LinkContainer to={{ pathname: '/about', query: {  } }}>
           <NavItem eventKey={1}>About</NavItem>
        </LinkContainer>

        <LinkContainer to={{ pathname: '/sign-in', query: {  } }}>
           <NavItem eventKey={2}>Sign in</NavItem>
        </LinkContainer>
      </Nav>
    )
  }

  render(){
    return(
      <div>
        <Navbar inverse  collapseOnSelect className="customNav">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/#">Home</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            {this.navbarLinks()}
          </Nav>
        </Navbar>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
