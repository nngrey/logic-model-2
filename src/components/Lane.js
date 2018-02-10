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

  const deleteNote = (noteToDelete) => {
    this.props.mappedDeleteNote(noteToDelete);
  }

  const editingNote = (noteToEdit) => {
    this.props.mappedEditingNote(noteToEdit);
  }

  const editNote = (noteToEdit) => {
    this.props.mappedEditNote(noteToEdit);
  }

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

    if(sourceId !== targetId && emptyLane) {
      targetProps.onMove({sourceId, targetId});
    }
  }
};

export default compose(
  DropTarget(ItemTypes.NOTE, noteTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  }))
)(Lane)
