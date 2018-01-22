import React from 'react';
import '../styles/Lane.css';
import LaneHeader from '../containers/LaneHeader';
import Notes from '../containers/Notes';

export default class Lane extends React.Component {
  constructor(props){
  super(props);
  this.editingNote = this.editingNote.bind(this);
  this.deleteNote = this.deleteNote.bind(this);
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
    const lane = this.props.lane;
    const allNotes = this.props.mappedNotesState;
    const laneNotes = allNotes.filter(note => note.laneId === lane._id);

    return (
      <div className="lane">
        <LaneHeader lane={lane} />
        <Notes
          notes={laneNotes}
          onEditing={this.editingNote}
          onEdit={this.editNote}
          onDelete={this.deleteNote}
          lane={lane}/>
      </div>
    );
  };
}
