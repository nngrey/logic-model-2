// ./react-redux-client/src/containers/Todo.js
import { connect } from 'react-redux';
import * as laneActions from '../actions/laneActions';
import Lanes from '../components/Lanes';

import {compose} from 'redux';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


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

// export default connect(mapStateToProps,mapDispatchToProps)(Lanes);


export default compose(
  DragDropContext(HTML5Backend),
  connect(mapStateToProps,mapDispatchToProps)
)(Lanes)
