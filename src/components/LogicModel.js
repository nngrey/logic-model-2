import React from 'react';
import Lane from '../containers/Lane';
import '../styles/Lane.css';

export default class LogicModel extends React.Component {
  constructor(props){
  super(props);
  this.addLane = this.addLane.bind(this);
}

  componentWillMount(){
    this.props.fetchLanes();
    this.props.fetchNotes();
  }

  addLane(){
    const data = new FormData();
    this.props.mappedAddLane(data);
  }

  editNote(noteToEdit){
    this.props.mappedEditNote(noteToEdit);
  }

  move(sourceId, targetId){
    const lanes = this.props.mappedLanesState;
    const notes = this.props.mappedNotesState;
    const sourceNote = notes.filter(note => note._id === sourceId)[0];
    const sourceLane = lanes.filter(lane => lane._id === sourceNote.laneId)[0]
    const targetLane = lanes.filter(lane => lane._id === targetId)[0]
    const sourceNoteIndex = sourceLane.notes.indexOf(sourceNote.uuid);
    const targetNoteIndex = 0;

    // update the note
    const noteData = new FormData();
    noteData.append('id', sourceNote._id);
    noteData.append('laneId', targetLane._id);
    this.editNote(noteData);
    // clean up the source lane
    sourceLane.notes.splice(sourceNoteIndex, 1);
    const sourceLaneData = new FormData();
    sourceLaneData.append('id', sourceLane._id);
    sourceLaneData.append('notes', sourceLane.notes);
    this.props.mappedEditLane(sourceLaneData);
    // move the note to the target lane
    targetLane.notes.splice(targetNoteIndex, 0, sourceNote.uuid);
    const targetLaneData = new FormData();
    targetLaneData.append('id', targetLane._id);
    targetLaneData.append('notes', targetLane.notes);
    this.props.mappedEditLane(targetLaneData);
  }

  render(){
    const lanes = this.props.mappedLanesState;
    const notes = this.props.mappedNotesState;

    return (
      <div>
        <div className="container">
          <span className="title">Logic model</span>
          <button className="add-lane" onClick={this.addLane}>+ Add column</button>
          <p className="description">This is a description of the logic model.</p>
        </div>
        <div  className="container lanesContainer">
          {lanes.map(lane =>
            <Lane
              onMove={({sourceId, targetId}) =>
                this.move(sourceId, targetId)}
              key={lane._id}
              lane={lane}
              notes={notes}
              lanes={lanes}
            />
          )}
        </div>
      </div>
    );
  };
}
