import React from 'react';
import Note from './Note';
import Editable from './Editable';
import '../styles/Notes.css';

export default class Notes extends React.Component {

  componentWillMount(){
    this.props.fetchNotes();
  }

  deleteNote(noteToDelete){
    this.props.mappedDeleteNote(noteToDelete);
  }

  editingNote(noteToEdit){
    this.props.mappedEditingNote(noteToEdit);
  }

  addNote(){
    const data = new FormData();
    this.props.mappedAddNote(data);
  }

  render(){
    const noteState = this.props.mappedNoteState;
    const notes = (typeof noteState !== 'undefined') ? noteState.notes : [];
    return (
      <div>
        <button className="add-note" onClick={() => this.addNote()}>Add Task</button>
        <ul className="notes">
          {notes.map((note) =>
            <li key={note._id}>
               <Note className="note" onClick={() => this.editingNote(note)}>
                 <Editable
                   editing={note.editing}
                   value={note.name}
                   onEdit={this.props.mappedEditNote}
                   id={note._id}/>
                 <button className="delete" onClick={() => this.deleteNote(note)}>x</button>
               </Note>
             </li>
          )}
        </ul>
      </div>
    );
  };
}
