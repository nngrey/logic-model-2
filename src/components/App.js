// ./react-redux-client/src/components/App.js
import React from 'react';
import { Navbar,Nav,NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
// import TodoForm from './TodoForm';
import Notes from './Notes';
import Editable from './Editable';


export default class App extends React.Component {
  constructor(props){
    super(props);
    // this.toggleAddTodo = this.toggleAddTodo.bind(this);
    // this.addTodo = this.addTodo.bind(this);
    this.addNote = this.addNote.bind(this);
  }

  // toggleAddTodo(e){
  //   e.preventDefault();
  //    this.props.mappedToggleAddTodo();
  // }

  // addTodo(e){
  //     e.preventDefault();
  //     const form = document.getElementById('addTodoForm');
  //     if(form.todoText.value !== ""  && form.todoDesc.value !== ""){
  //       const data = new FormData();
  //      data.append('todoText', form.todoText.value);
  //       data.append('todoDesc', form.todoDesc.value);
  //       // const data = {
  //       //   todoText: form.todoText.value,
  //       //   todoDesc: form.todoDesc.value
  //       // }
  //       this.props.mappedAddTodo(data);
  //     form.reset();
  //     }
  //     else{
  //       return ;
  //     }
  // }

  addNote(){
      // const data = {noteText: 'New note'};
      const data = new FormData();
      data.append('noteText', 'New note');
      this.props.mappedAddNote(data);
  }

  render(){
    const appState = this.props.mappedAppState;
    // const notes = [{task: "Go shopping", id: 1}];
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
       // notes={notes}
       fetchNotes={this.props.mappedFetchNotes}
       // onNoteClick={this.props.actions.editingNote}
       // onEdit={this.props.actions.editNote}
       onDelete={this.deleteNote}
       />
   </div>
  </div>
 </div>
    );
  }
}
