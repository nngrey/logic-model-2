// ./react-redux-client/src/containers/Todo.js
import { connect } from 'react-redux';
import * as noteActions from '../actions/noteActions';
import * as laneActions from '../actions/laneActions';
import LaneHeader from '../components/LaneHeader';

// map state from store to props
const mapStateToProps = (state) => {

  return {
    //you can now say this.props.mappedAppSate
    mappedLaneState: state.laneState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedEditLane: (data) => dispatch(laneActions.editLane(data)),
    mappedEditingLane: lane => dispatch(laneActions.editingLane(lane)),
    mappedAddNote: data => dispatch(noteActions.addNewNote(data)),
    mappedDeleteLane: note => dispatch(laneActions.deleteLane(note))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LaneHeader);
