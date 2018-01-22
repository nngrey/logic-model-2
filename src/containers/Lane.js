// ./react-redux-client/src/containers/Todo.js
import { connect } from 'react-redux';
import * as noteActions from '../actions/noteActions';
import * as laneActions from '../actions/laneActions';

import Lane from '../components/Lane';

// map state from store to props
const mapStateToProps = (state) => {
  // console.log('888888888');
  // console.log(state.laneState.lane);
  return {
    //you can now say this.props.mappedAppSate
    mappedNotesState: state.noteState.notes,
    mappedLaneState: state.laneState.lane
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedEditingLane: lane => dispatch(laneActions.editingLane(lane)),
    fetchNotes: () => dispatch(noteActions.fetchNotes()),
    mappedAddNote: note => dispatch(noteActions.addNewNote(note)),
    mappedEditingNote: note => dispatch(noteActions.editingNote(note)),
    mappedEditNote: (id, value) => dispatch(noteActions.editNote(id, value)),
    mappedDeleteNote: noteToDelete => dispatch(noteActions.deleteNote(noteToDelete))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Lane);
