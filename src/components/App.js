import React from 'react';
import { Navbar,Nav,NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
import Notes from './Notes';
import Editable from './Editable';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);
  }

  addNote(){
      const data = new FormData();
      data.append('noteText', 'New note');
      this.props.mappedAddNote(data);
  }

  render(){
    const appState = this.props.mappedAppState;
    return(
      <div>
      <Navbar inverse  collapseOnSelect className="customNav">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/#">Home</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>

    </Navbar.Collapse>
  </Navbar>
  <div className="container">

  { /* Each Smaller Components */}
   {this.props.children}
   <div>
     <button className="add-note" onClick={this.addNote} >+</button>
     <Notes
       fetchNotes={this.props.mappedFetchNotes}
       onDelete={this.deleteNote}
       />
   </div>
  </div>
 </div>
    );
  }
}
