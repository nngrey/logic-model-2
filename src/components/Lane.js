import React from 'react';
import '../styles/Lane.css';
import LaneHeader from '../containers/LaneHeader';
import Notes from '../containers/Notes';
import {DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';

// const noteTarget = {
//   hover(targetProps, monitor) {
//     const sourceProps = monitor.getItem();
//     console.log(sourceProps);
//     const sourceId = sourceProps.id;
//   }
// };
//
// DropTarget(ItemTypes.LANE, noteTarget, (connect, monitor) => ({
//   connectDropTarget: connect.dropTarget(),
//   isDragging: monitor.isDragging()
// }))

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
    let laneNotes = allNotes.filter(note => lane.notes.includes(note.uuid));

      return (
        <div className="lane">
          <LaneHeader lane={lane} />
          <Notes
            notes={laneNotes}
            noteIds={lane.notes}
            onEditing={this.editingNote}
            onEdit={this.editNote}
            onDelete={this.deleteNote}
            lane={lane}/>
        </div>
      );
  };
}
