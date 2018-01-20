import { connect } from 'react-redux';
import App from '../components/App';
import * as noteActions from '../actions/noteActions';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedAppState: state.appState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedAddNote: note => dispatch(noteActions.addNewNote(note)),
    fetchNotes: () => dispatch(noteActions.fetchNotes())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
