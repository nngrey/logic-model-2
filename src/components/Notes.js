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

  editNote(noteToEdit){
    this.props.mappedEditNote(noteToEdit);
  }

  render(){
    const noteState = this.props.mappedNoteState;
    // console.log("************");
    // console.log(noteState);
    const notes = (typeof noteState !== 'undefined') ? noteState.notes : [];
    // const notes = [{task: "Go shopping", id: 1}];
    return (
      <ul className="notes">
        {notes.map((note) =>
          <li key={note.id}>
             <Note className="note" >
               <Editable
                 editing={note.editing}
                 value={note.noteText}
                 onEdit={() => this.editNote(note)} />
              <button className="delete" onClick={() => this.deleteNote(note)}>x</button>
             </Note>
           </li>
        )}
      </ul>
    );
  };
}
