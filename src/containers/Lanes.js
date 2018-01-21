// ./react-redux-client/src/containers/Todo.js
import { connect } from 'react-redux';
import * as noteActions from '../actions/noteActions';
import Lanes from '../components/Lanes';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedLanesState: state.noteState.lanes
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Lanes);
