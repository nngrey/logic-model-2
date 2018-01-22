// ./react-redux-client/src/containers/Todo.js
import { connect } from 'react-redux';
import * as laneActions from '../actions/laneActions';
import Lanes from '../components/Lanes';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedLanesState: state.laneState.lanes
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    fetchLanes: () => dispatch(laneActions.fetchLanes()),
    mappedAddLane: lane => dispatch(laneActions.addNewLane(lane))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Lanes);
