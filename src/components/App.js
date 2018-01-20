import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../styles/App.css';
import Notes from './Notes';

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
          </Nav>
        </Navbar>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
