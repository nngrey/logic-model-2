const INITIAL_STATE = {
  lanes:[],
  // notes: [
  //         { _id: '234',
  //           noteText: 'first note'
  //         },
  //         { _id: '345',
  //           noteText: 'second note'
  //         }
  //       ],
  // note: null,
  // lanes: [],
  isFetching: false,
  error: null,
  successMsg: null,
  noteToDelete: null,
  newLane: null
}

export  const laneReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_LANES_REQUEST':
          return {
            ...currentState,
            lanes: [],
            lane: null,
            isFetching: true,
            error: null,
            successMsg: null,
            laneToDelete: null,
            newLane: null
          }

    case 'FETCH_LANES_SUCCESS':
          return {
            ...currentState,
            lanes: action.lanes,
            lane: null,
            isFetching: false,
            error: null,
            successMsg: action.message,
            laneToDelete: null,
            newLane: null
          }

    case 'FETCH_LANES_FAILED':
          return {
            ...currentState,
            lanes: [],
            lane: null,
            isFetching: false,
            error: action.error,
            successMsg: null,
            laneToDelete: null,
            newLane: null
          }

    case 'FETCH_LANE_REQUEST':
          return {
            ...currentState,
            lanes: currentState.lanes,
            lane: null,
            isFetching: true,
            error: null,
            successMsg: null,
            laneToDelete: null,
            newLane: null
          }

    case 'FETCH_LANE_SUCCESS':
          return {
            ...currentState,
            lanes: currentState.lanes,
            lane: action.lane,
            isFetching: false,
            error: null,
            successMsg: action.message,
            laneToDelete: null,
            newLane: null
          }

    case 'FETCH_LANE_FAILED':
          return {
            ...currentState,
            lanes: [],
            lane: null,
            isFetching: false,
            error: action.error,
            successMsg: null,
            laneToDelete: null,
            newLane: null
          }

    case 'ADD_NEW_LANE_REQUEST':
          return {
            ...currentState,
            lanes: currentState.lanes,
            lane: null,
            isFetching: true,
            error: null,
            successMsg: null,
            laneToDelete: null,
            newLane: action.lane
          }

    case 'ADD_NEW_LANE_REQUEST_FAILED':
          return {
            ...currentState,
            lanes: currentState.lanes,
            lane: null,
            isFetching: true,
            error: action.error,
            successMsg: null,
            laneToDelete: null,
            newLane: null
          }

    case 'ADD_NEW_LANE_REQUEST_SUCCESS':
          action.lane.editing = true;
          const nextState =  {
            ...currentState,
              lanes: [...currentState.lanes, action.lane],
            lane: action.lane,
            isFetching: false,
            error: null,
            successMsg: action.message,
            laneToDelete: null,
            newLane: action.lane
          }
        return nextState;

    case 'EDITING_LANE':
          action.lane.editing = true;
          return {
            ...currentState,
            lanes: currentState.lanes,
            lane: action.lane,
            isFetching: true,
            error: null,
            successMsg: null,
            laneToDelete: null,
            newLane: null
          }

    case 'EDIT_LANE_REQUEST':
          return {
            ...currentState,
            lanes: currentState.lanes,
            lane: null,
            isFetching: true,
            error: null,
            successMsg: null,
            laneToDelete: null,
            newLane: null
          }

  case 'EDIT_LANE_SUCCESS':
        if(!!action.lane) {
          action.lane.editing = false;
        }

        const updatedLanes = currentState.lanes.map((lane) => {
          if((action.lane === null) || (lane._id !== action.lane._id)){
            //This is not the item we care about, keep it as is
            return lane;
          }
          //Otherwise, this is the one we want to return an updated value
          return { ...lane, ...action.lane }
        })

        return {
          ...currentState,
          lanes: updatedLanes,
          lane: action.lane,
          isFetching: false,
          error: null,
          successMsg: action.message,
          laneToDelete: null,
          newLane: null
        }

  case 'EDIT_LANE_FAILED':
        return {
          ...currentState,
          lanes: currentState.lanes,
          lane: null,
          isFetching: false,
          error: action.error,
          successMsg: null,
          laneToDelete: null,
          laneToEdit: currentState.laneToEdit,
          newLane: null
        }

  case 'DELETE_LANE_REQUEST':
        action.lane.editing = false;
        return {
          ...currentState,
          lanes: currentState.lanes,
          lane: null,
          isFetching: true,
          error: null,
          successMsg: null,
          laneToDelete: action.lane,
          newLane: null
        }

  case 'DELETE_LANE_SUCCESS':
        let filteredLanes = currentState.lanes;
        // Not sure why this is not laneToDelete
        filteredLanes = currentState.lanes.filter((lane) => (lane !== null) && (lane._id !== currentState.lane._id))
        return {
          ...currentState,
          lanes: filteredLanes,
          lane: null,
          isFetching: false,
          error: null,
          successMsg: action.message,
          laneToDelete: null,
          newLane: null
        }

  case 'DELETE_LANE_FAILED':
        return {
          ...currentState,
          lanes: currentState.lanes,
          lane: null,
          isFetching: false,
          error: action.error,
          successMsg: null,
          laneToDelete: null,
          newLane: null
        }

    default:
       return currentState;
  }
}
