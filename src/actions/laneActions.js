const apiUrl = "/api/lanes";

export const addNewLane = (laneData) => {
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
          response.json().then(data => {
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

export const editNote = (id, value) => {
    return (dispatch) => {
      dispatch(editNoteRequest(id));
      return fetch(apiUrl, {
        method:'put',
        body:id
      }).then(response => {
        if(response.ok){
          response.json().then(data => {
            dispatch(editNoteSuccess(data.note,data.message));
          })
        }
        else{
          response.json().then(error => {
            dispatch(editNoteFailed(error));
          })
        }
      })
    }
}

export const editingNote = (note) => {
   return {
     type:'EDITING_NOTE',
     note
   }
}

export const editNoteRequest = (id) => {
   return {
     type:'EDIT_NOTE_REQUEST',
     id
   }
}

export const editNoteSuccess = (note,message) => {
  return {
    type:'EDIT_NOTE_SUCCESS',
    note:note,
    message:message
  }
}

export const editNoteFailed = (error) => {
  return {
    type:'EDIT_NOTE_FAILED',
    error
  }
}

export const deleteNote = (note) => {
  return (dispatch) => {
    dispatch(deleteNoteRequest(note));
    return fetch(apiUrl + note._id ,{
      method:'delete'
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(deleteNoteSuccess(data.message));
        })
      }
      else{
        response.json().then(error => {
          dispatch(deleteNoteFailed(error));
        })
      }
    })

  }
}

export const deleteNoteRequest = (note) => {
   return {
     type:'DELETE_NOTE_REQUEST',
     note
   }
}

export const deleteNoteSuccess = (message) => {
  return {
    type:'DELETE_NOTE_SUCCESS',
    message:message
  }
}

export const deleteNoteFailed = (error) => {
  return {
    type:'DELETE_NOTE_FAILED',
    error
  }
}
