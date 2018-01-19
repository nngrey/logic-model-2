import React from 'react';
import Note from './Note';
import Editable from './Editable';
// import '../styles/Notes.css';

export default class Notes extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    // console.log(this.props);
    this.props.fetchNotes();
  }

  deleteNote(noteToDelete){
    this.props.mappedDeleteNote(noteToDelete);
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
               value={note.noteText}/>
              <button className="delete" onClick={() => this.deleteNote(note)}>x</button>
             </Note>
           </li>
        )}
      </ul>
    );
  };
}
