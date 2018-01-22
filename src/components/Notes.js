import React from 'react';
import Note from './Note';
import Editable from './Editable';
import '../styles/Notes.css';

export default class Notes extends React.Component {
  constructor(props){
  super(props);
  this.editNote = this.editNote.bind(this);
}

  deleteNote(noteToDelete){
    this.props.mappedDeleteNote(noteToDelete);
  }

  editingNote(noteToEdit){
    this.props.mappedEditingNote(noteToEdit);
  }

  editNote(noteToEdit){
    this.props.mappedEditNote(noteToEdit);
  }

  render(){
    const notes = this.props.notes;
    return (
      <div>
        <ul className="notes">
          {notes.map((note) =>
            <li key={note._id}>
               <Note className="note" onClick={() => this.editingNote(note)}>
                 <Editable
                   editing={note.editing}
                   value={note.name}
                   onEdit={this.editNote}
                   id={note._id}/>
                 <button className="delete" title="Delete item" onClick={() => this.deleteNote(note)}>x</button>
               </Note>
             </li>
          )}
        </ul>
      </div>
    );
  };
}
