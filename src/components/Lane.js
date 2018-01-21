import React from 'react';
import '../styles/Lane.css';
import LaneHeader from '../containers/LaneHeader';
import Notes from '../containers/Notes2';


export default class Lane extends React.Component {
  constructor(props){
  super(props);
  this.addNote = this.addNote.bind(this);
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

  addNote(){
    const data = new FormData();
    this.props.mappedAddNote(data);
  }

  editNote(noteToEdit){
    this.props.mappedEditNote(noteToEdit);
  }

  render(){
    const allNotes = this.props.mappedNotesState;
    const laneNotes = allNotes.filter(note => note.laneId === this.props.lane._id)

    return (
      <div className="lane">
        <LaneHeader lane={this.props.lane} />
        <Notes
          notes={laneNotes}
          addNote={this.addNote}
          onEditing={this.editingNote}
          onEdit={this.editNote}
          onDelete={this.deleteNote}
          lane={this.props.lane}/>
      </div>
    );
  };
}
