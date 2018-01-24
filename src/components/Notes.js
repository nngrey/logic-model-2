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
    const sourceNoteIndex = sourceLane.notes.indexOf(sourceNote.uuid);
    const targetNoteIndex = targetLane.notes.indexOf(targetNote.uuid);
    if(sourceLane._id === targetLane._id) {
      sourceLane.notes.splice(targetNoteIndex, 0, sourceLane.notes.splice(sourceNoteIndex, 1)[0]);
      const sourceLaneData = new FormData();
      sourceLaneData.append('id', sourceLane._id);
      sourceLaneData.append('notes', sourceLane.notes);
      this.props.mappedEditLane(sourceLaneData);
    } else {
      // update sourceNote with new laneId
      const noteData = new FormData();
      noteData.append('id', sourceNote._id);
      noteData.append('laneId', targetLane._id);
      this.editNote(noteData);
      // get rid of the source
      sourceLane.notes.splice(sourceNoteIndex, 1);
      const sourceLaneData = new FormData();
      sourceLaneData.append('id', sourceLane._id);
      sourceLaneData.append('notes', sourceLane.notes);
      this.props.mappedEditLane(sourceLaneData);
      // and move it to target
      targetLane.notes.splice(targetNoteIndex, 0, sourceNote.uuid);
      const targetLaneData = new FormData();
      targetLaneData.append('id', targetLane._id);
      targetLaneData.append('notes', targetLane.notes);
      this.props.mappedEditLane(targetLaneData);
    }
  }

  render(){
    const notes = this.props.notes;
    const noteIds = this.props.noteIds;

    let laneNotes = [];
    if(notes.length > 0 && noteIds){
      for (var i=0; i < noteIds.length; i++) {
        let note = notes.filter(note => note.uuid === noteIds[i])[0];
        laneNotes.push(note);
      }
    }
    if(laneNotes.length == notes.length) {
      laneNotes = laneNotes || notes;
    } else {
      laneNotes = notes;
    }

    return (
      <div>
        <ul className="notes">
          {laneNotes.map((note) =>
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
