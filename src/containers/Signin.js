import { connect } from 'react-redux';
import * as authActions from '../actions/authActions';
import Signin from '../components/Signin';


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
    mappedSignIn: (values) => dispatch(authActions.signIn(values))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signin);
