// ./react-redux-client/src/containers/Todo.js
import { connect } from 'react-redux';
import * as noteActions from '../actions/noteActions';
import Note from '../components/Note';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedNoteState: state.noteState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Note);
