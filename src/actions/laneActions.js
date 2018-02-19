const apiUrl = "/api/lanes/";

export const addNewLane = (laneData) => {
  console.log(laneData);
  return (dispatch) => {
    dispatch(addNewLaneRequest(laneData));
    return fetch(apiUrl, {
      method:'post',
      body: laneData,
    }).then(response => {
      if(response.ok){
        response.json().then(data => {console.log(data.lane);
          dispatch(addNewLaneRequestSuccess(data.lane, data.message))
        })
      }
      else{
        response.json().then(error => {
          dispatch(addNewLaneRequestFailed(error))
        })
      }
    })
  }
}

export const addNewLaneRequest = (lane) => {
  return {
    type: 'ADD_NEW_LANE_REQUEST',
    lane
  }
}

export const addNewLaneRequestSuccess = (lane,message) => {
  return {
    type: 'ADD_NEW_LANE_REQUEST_SUCCESS',
    lane:lane,
    message:message
  }
}

export const addNewLaneRequestFailed = (error) => {
  return {
    type: 'ADD_NEW_LANE_REQUEST_FAILED',
    error
  }
}

//Async action
export const fetchLanes = () => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return (dispatch) => {

    dispatch(fetchLanesRequest());
    // Returns a promise
    return fetch(apiUrl)
      .then(response => {
        if(response.ok){
          response.json().then(data => {console.log(data.lanes);
            dispatch(fetchLanesSuccess(data.lanes,data.message));
          })
        }
        else{
          response.json().then(error => {
            dispatch(fetchLanesFailed(error));
          })
        }
      })
  }
}

export const fetchLanesRequest = () => {
  return {
    type:'FETCH_LANES_REQUEST'
  }
}

//Sync action
export const fetchLanesSuccess = (lanes,message) => {
  return {
    type: 'FETCH_LANES_SUCCESS',
    lanes: lanes,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchLanesFailed = (error) => {
  return {
    type:'FETCH_LANES_FAILED',
    error
  }
}

export const editingLane = (lane) => {
  return {
    type:'EDITING_LANE',
    lane
  }
}

export const editLane = (laneData) => {
    return (dispatch) => {
      dispatch(editLaneRequest(laneData));
      return fetch(apiUrl, {
        method:'put',
        body: laneData
      }).then(response => {
        if(response.ok){
          response.json().then(data => {
            dispatch(editLaneSuccess(data.lane,data.message));
          })
        }
        else{
          response.json().then(error => {
            dispatch(editLaneFailed(error));
          })
        }
      })
    }
}

export const editLaneRequest = (id) => {
   return {
     type:'EDIT_LANE_REQUEST',
     id
   }
}

export const editLaneSuccess = (lane,message) => {
  return {
    type:'EDIT_LANE_SUCCESS',
    lane:lane,
    message:message
  }
}

export const editLaneFailed = (error) => {
  return {
    type:'EDIT_LANE_FAILED',
    error
  }
}

export const deleteLane = (lane) => {
  return (dispatch) => {
    dispatch(deleteLaneRequest(lane));
    return fetch(apiUrl + lane._id ,{
      method:'delete'
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(deleteLaneSuccess(data.message));
        })
      }
      else{
        response.json().then(error => {
          dispatch(deleteLaneFailed(error));
        })
      }
    })

  }
}

export const deleteLaneRequest = (lane) => {
   return {
     type:'DELETE_LANE_REQUEST',
     lane
   }
}

export const deleteLaneSuccess = (message) => {
  return {
    type:'DELETE_LANE_SUCCESS',
    message:message
  }
}

export const deleteLaneFailed = (error) => {
  return {
    type:'DELETE_LANE_FAILED',
    error
  }
}
