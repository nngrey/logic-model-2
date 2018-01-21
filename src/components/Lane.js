import React from 'react';
import '../styles/Lane.css';
import LaneHeader from './LaneHeader';
import Notes from './Notes2';


export default class Lane extends React.Component {
  constructor(props){
  super(props);
  this.addNote = this.addNote.bind(this);
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
    console.log(this.props)
    const data = new FormData();
    this.props.mappedAddNote(data);
  }

  editNote(noteToEdit){
    this.props.mappedEditNote(noteToEdit);
  }

  render(){
    const notes = this.props.mappedLaneState;
    return (
      <div className="lane">
        <LaneHeader lane={this.props.lane} />
        <Notes
          notes={notes}
          addNote={this.addNote}
          onNoteClick={this.editingNote}
          onEdit={this.editNote}
          onDelete={this.deleteNote}
          lane={this.props.lane}/>
      </div>
    );
  };
}
