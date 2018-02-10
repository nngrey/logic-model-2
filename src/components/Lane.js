import React from 'react';
import '../styles/Lane.css';
import LaneHeader from '../containers/LaneHeader';
import Notes from '../containers/Notes';
import {DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';
import {compose} from 'redux';


const Lane = ({
  connectDropTarget, lane, notes, ...props
}) => {

// this.editingNote = this.editingNote.bind(this);
// this.deleteNote = this.deleteNote.bind(this);

  // componentWillMount(){
  //   this.props.fetchNotes();
  // }


  const deleteNote = (noteToDelete) => {
    this.props.mappedDeleteNote(noteToDelete);
  }

  const editingNote = (noteToEdit) => {
    this.props.mappedEditingNote(noteToEdit);
  }

  const editNote = (noteToEdit) => {
    this.props.mappedEditNote(noteToEdit);
  }

  // const lane = this.props.lane;
  const allNotes = props.mappedNotesState;
  const laneNotes = allNotes.filter(note => lane.notes.includes(note.uuid));

  return connectDropTarget(
    <div className="lane">
      <LaneHeader lane={lane} />
      <Notes
        notes={laneNotes}
        noteIds={lane.notes}
        onEditing={editingNote}
        onEdit={editNote}
        onDelete={deleteNote}
        lane={lane}/>
    </div>
  );
}

const noteTarget = {
  hover(targetProps, monitor) {
    const targetId = targetProps.lane._id;
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;
    const emptyLane = (targetProps.lane.notes.filter(Boolean).length === 0)

    // console.lsog(targetProps.lane.notes);
    if(sourceId !== targetId && emptyLane) {
      // alert('ho');
      targetProps.onMove({sourceId, targetId});
    }
  }
};

export default compose(
  DropTarget(ItemTypes.NOTE, noteTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  }))
)(Lane)



// export default class Lane extends React.Component {
//   constructor(props){
//   super(props);
//   this.editingNote = this.editingNote.bind(this);
//   this.deleteNote = this.deleteNote.bind(this);
// }
//
//   componentWillMount(){
//     this.props.fetchNotes();
//   }
//
//   deleteNote(noteToDelete){
//     this.props.mappedDeleteNote(noteToDelete);
//   }
//
//   editingNote(noteToEdit){
//     this.props.mappedEditingNote(noteToEdit);
//   }
//
//   editNote(noteToEdit){
//     this.props.mappedEditNote(noteToEdit);
//   }
//
//   render(){
//     const lane = this.props.lane;
//     const allNotes = this.props.mappedNotesState;
//     let laneNotes = allNotes.filter(note => lane.notes.includes(note.uuid));
//
//       return (
//         <div className="lane">
//           <LaneHeader lane={lane} />
//           <Notes
//             notes={laneNotes}
//             noteIds={lane.notes}
//             onEditing={this.editingNote}
//             onEdit={this.editNote}
//             onDelete={this.deleteNote}
//             lane={lane}/>
//         </div>
//       );
//   };
// }
