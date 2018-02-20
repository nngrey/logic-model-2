import { connect } from 'react-redux';
import * as authActions from '../actions/authActions';
import SignOut from '../components/SignOut';


// map state from store to props
const mapStateToProps = (state,ownProps) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedAuthState: state.authState
    // mappedLaneState: state.laneState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedSignOut: () => dispatch(authActions.signOut())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignOut);
