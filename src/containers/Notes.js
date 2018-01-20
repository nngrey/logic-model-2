import { connect } from 'react-redux';
import * as noteActions from '../actions/noteActions';
import Notes from '../components/Notes';

// map state from store to props
const mapStateToProps = (state,ownProps) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedNoteState: state.noteState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    fetchNotes: () => dispatch(noteActions.fetchNotes()),
    mappedAddNote: note => dispatch(noteActions.addNewNote(note)),
    mappedEditingNote: note => dispatch(noteActions.editingNote(note)),
    mappedEditNote: (id, value) => dispatch(noteActions.editNote(id, value)),
    mappedDeleteNote: noteToDelete => dispatch(noteActions.deleteNote(noteToDelete)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Notes);
