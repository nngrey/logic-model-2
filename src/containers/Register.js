import { connect } from 'react-redux';
import * as authActions from '../actions/authActions';
import Register from '../components/Register';


// map state from store to props
const mapStateToProps = (state,ownProps) => {
  return {
    //you can now say this.props.mappedAppSate
    // mappedNoteState: state.noteState,
    // mappedLaneState: state.laneState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedRegister: (values) => dispatch(authActions.register(values))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);
