import { connect } from 'react-redux';
import * as noteActions from '../actions/noteActions';
import * as laneActions from '../actions/laneActions';
import Notes from '../components/Notes';

// map state from store to props
const mapStateToProps = (state,ownProps) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedNoteState: state.noteState,
    mappedLaneState: state.laneState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedMove: (lanes, notes, sourceId, targetId) => dispatch(noteActions.move(lanes, notes, sourceId, targetId)),
    mappedEditLane: (data) => dispatch(laneActions.editLane(data)),
    mappedEditingNote: note => dispatch(noteActions.editingNote(note)),
    mappedEditNote: (data) => dispatch(noteActions.editNote(data)),
    mappedDeleteNote: noteToDelete => dispatch(noteActions.deleteNote(noteToDelete))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Notes);
