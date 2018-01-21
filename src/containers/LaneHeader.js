// ./react-redux-client/src/containers/Todo.js
import { connect } from 'react-redux';
import * as noteActions from '../actions/noteActions';
import * as laneActions from '../actions/laneActions';
import LaneHeader from '../components/LaneHeader';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedLaneHeaderState: state.noteState.notes
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedAddNote: note => dispatch(noteActions.addNewNote(note)),
    mappedDeleteLane: note => dispatch(laneActions.deleteLane(note))  
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LaneHeader);
