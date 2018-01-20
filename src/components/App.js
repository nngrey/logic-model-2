import React from 'react';
import { Navbar } from 'react-bootstrap';
import '../styles/App.css';
import Notes from './Notes';

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
    return(
      <div>
        <Navbar inverse  collapseOnSelect className="customNav">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/#">Home</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <div className="container">
          <button className="add-note" onClick={this.addNote}>Add Task</button>
          {this.props.children}
         <Notes
           fetchNotes={this.props.mappedFetchNotes}
           />
        </div>
      </div>
    );
  }
}
