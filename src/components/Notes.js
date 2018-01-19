import React from 'react';
import Note from './Note';
import Editable from './Editable';
import '../styles/Notes.css';

export default class Notes extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchNotes();
  }

  deleteNote(noteToDelete){
    this.props.mappedDeleteNote(noteToDelete);
  }

  editingNote(noteToEdit){
    this.props.mappedEditingNote(noteToEdit);
  }

  render(){
    const noteState = this.props.mappedNoteState;
    const notes = (typeof noteState !== 'undefined') ? noteState.notes : [];
    return (
      <ul className="notes">
        {notes.map((note) =>
          <li key={note._id}>
             <Note className="note" onClick={() => this.editingNote(note)}>
               <Editable
                 editing={note.editing}
                 value={note.noteText}
                 onEdit={this.props.mappedEditNote}
                 id={note._id}/>
              <button className="delete" onClick={() => this.deleteNote(note)}>x</button>
             </Note>
           </li>
        )}
      </ul>
    );
  };
}
