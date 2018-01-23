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

  move(sourceId, targetId){
    const lanes = this.props.mappedLaneState.lanes;
    const notes = this.props.mappedNoteState.notes;
    const sourceNote = notes.filter(note => note._id === sourceId)[0];
    const targetNote = notes.filter(note => note._id === targetId)[0];
    const sourceLane = lanes.filter(lane => lane._id === sourceNote.laneId)[0]
    const targetLane = lanes.filter(lane => lane._id === targetNote.laneId)[0]
    const sourceLaneNotes = notes.filter(note => note.laneId === sourceNote.laneId);
    const targetLaneNotes = notes.filter(note => note.laneId === targetNote.laneId);
    const sourceNoteIndex = sourceLaneNotes.indexOf(sourceNote);
    const targetNoteIndex = targetLaneNotes.indexOf(targetNote);

    if(sourceNote.laneId === targetNote.laneId) {
      const sourceLaneData = new FormData();
      // move at once to avoid complications
      sourceLane.notes.splice(sourceNoteIndex, 1);
      sourceLane.notes.splice(targetNoteIndex, 0, sourceNote.uuid);
      sourceLaneData.append('id', sourceLane._id);
      sourceLaneData.append('notes', sourceLane.notes);
      this.props.mappedEditLane(sourceLaneData);
    } else {
      // get rid of the source
      sourceLane.notes.splice(sourceNoteIndex, 1);
      sourceLane.notes = sourceLane.notes.filter( note => note !== "" );
      sourceLane.notes = [...new Set(sourceLane.notes)];
      const sourceLaneData = new FormData();
      sourceLaneData.append('id', sourceLane._id);
      sourceLaneData.append('notes', sourceLane.notes);
      this.props.mappedEditLane(sourceLaneData);
      // and move it to target
      targetLane.notes.splice(targetNoteIndex, 0, sourceNote.uuid);
      targetLane.notes = targetLane.notes.filter( note => note !== "" );
      targetLane.notes = [...new Set(targetLane.notes)];
      const targetLaneData = new FormData();
      targetLaneData.append('id', targetLane._id);
      targetLaneData.append('notes', targetLane.notes);
      this.props.mappedEditLane(targetLaneData);
    }
  }

  render(){
    const notes = this.props.notes;
    return (
      <div>
        <ul className="notes">
          {notes.map((note) =>
            <li key={note._id}>

              <Note className="note" id={note._id}
                onClick={() => this.editingNote(note)}
                onMove={({sourceId, targetId}) =>
                  this.move(sourceId, targetId)}>

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
