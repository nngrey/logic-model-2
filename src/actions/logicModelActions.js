const apiUrl = "/api/lanes/";

export const addNewLogicModel = (logicModelData) => {
  console.log(logicModelData);
  return (dispatch) => {
    dispatch(addNewLogicModelRequest(logicModelData));
    return fetch(apiUrl, {
      method:'post',
      body: logicModelData,
    }).then(response => {
      if(response.ok){
        response.json().then(data => {console.log(data.lane);
          dispatch(addNewLogicModelRequestSuccess(data.lane, data.message))
        })
      }
      else{
        response.json().then(error => {
          dispatch(addNewLogicModelRequestFailed(error))
        })
      }
    })
  }
}

export const addNewLogicModelRequest = (logicModel) => {
  return {
    type: 'ADD_NEW_LOGIC_MODEL_REQUEST',
    logicModel
  }
}

export const addNewLogicModelRequestSuccess = (logicModel,message) => {
  return {
    type: 'ADD_NEW_LANE_REQUEST_SUCCESS',
    logicModel:logicModel,
    message:message
  }
}

export const addNewLogicModelRequestFailed = (error) => {
  return {
    type: 'ADD_NEW_LANE_REQUEST_FAILED',
    error
  }
}

//Async action
export const fetchLogicModels = () => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return (dispatch) => {

    dispatch(fetchLogicModelsRequest());
    // Returns a promise
    return fetch(apiUrl)
      .then(response => {
        if(response.ok){
          response.json().then(data => {console.log(data.logicModels);
            dispatch(fetchLogicModelsSuccess(data.logicModels,data.message));
          })
        }
        else{
          response.json().then(error => {
            dispatch(fetchLogicModelsFailed(error));
          })
        }
      })
  }
}

export const fetchLogicModelsRequest = () => {
  return {
    type:'FETCH_LANES_REQUEST'
  }
}

//Sync action
export const fetchLogicModelsSuccess = (logicModels,message) => {
  return {
    type: 'FETCH_LANES_SUCCESS',
    logicModels: logicModels,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchLogicModelsFailed = (error) => {
  return {
    type:'FETCH_LOGIC_MODELS_FAILED',
    error
  }
}

// export const editingLane = (lane) => {
//   return {
//     type:'EDITING_LANE',
//     lane
//   }
// }
//
// export const editLane = (laneData) => {
//     return (dispatch) => {
//       dispatch(editLaneRequest(laneData));
//       return fetch(apiUrl, {
//         method:'put',
//         body: laneData
//       }).then(response => {
//         if(response.ok){
//           response.json().then(data => {
//             dispatch(editLaneSuccess(data.lane,data.message));
//           })
//         }
//         else{
//           response.json().then(error => {
//             dispatch(editLaneFailed(error));
//           })
//         }
//       })
//     }
// }
//
// export const editLaneRequest = (id) => {
//    return {
//      type:'EDIT_LANE_REQUEST',
//      id
//    }
// }
//
// export const editLaneSuccess = (lane,message) => {
//   return {
//     type:'EDIT_LANE_SUCCESS',
//     lane:lane,
//     message:message
//   }
// }
//
// export const editLaneFailed = (error) => {
//   return {
//     type:'EDIT_LANE_FAILED',
//     error
//   }
// }
//
// export const deleteLane = (lane) => {
//   return (dispatch) => {
//     dispatch(deleteLaneRequest(lane));
//     return fetch(apiUrl + lane._id ,{
//       method:'delete'
//     }).then(response => {
//       if(response.ok){
//         response.json().then(data => {
//           dispatch(deleteLaneSuccess(data.message));
//         })
//       }
//       else{
//         response.json().then(error => {
//           dispatch(deleteLaneFailed(error));
//         })
//       }
//     })
//
//   }
// }
//
// export const deleteLaneRequest = (lane) => {
//    return {
//      type:'DELETE_LANE_REQUEST',
//      lane
//    }
// }
//
// export const deleteLaneSuccess = (message) => {
//   return {
//     type:'DELETE_LANE_SUCCESS',
//     message:message
//   }
// }
//
// export const deleteLaneFailed = (error) => {
//   return {
//     type:'DELETE_LANE_FAILED',
//     error
//   }
// }
