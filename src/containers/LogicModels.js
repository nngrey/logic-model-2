import { connect } from 'react-redux';
// import * as authActions from '../actions/authActions';
import LogicModels from '../components/LogicModels';

// map state from store to props
const mapStateToProps = (state) => {

  // console.log(state);
  return {
    //you can now say this.props.mappedAppSate
    mappedAuthState: state.authState.user,
    // mappedLaneState: state.laneState.lane
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    // fetchNotes: () => dispatch(noteActions.fetchNotes()),
    // mappedEditingNote: note => dispatch(noteActions.editingNote(note)),
    // mappedEditNote: (id, value) => dispatch(noteActions.editNote(id, value)),
    // mappedDeleteNote: noteToDelete => dispatch(noteActions.deleteNote(noteToDelete))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LogicModels);
