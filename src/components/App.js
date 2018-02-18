import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../styles/App.css';

export default class App extends React.Component {
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
            <LinkContainer to={{ pathname: '/about', query: {  } }}>
               <NavItem eventKey={1}>About</NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/signin', query: {  } }}>
               <NavItem eventKey={1}>Sign in</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
