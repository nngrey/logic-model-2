import React from 'react';
import Note from './Note';
import Editable from './Editable';
// import '../styles/Notes.css';

const Notes = (props) => {
  const notes = props.notes;
  return (
    <ul className="notes">
      {notes.map((note) =>
        <li key={note.id}>
           <Note className="note" >
             <Editable
             editing={note.editing}
             value={note.task}/>
            <button className="delete">x</button>
           </Note>
         </li>
      )}
    </ul>
  );
};

export default Notes;
