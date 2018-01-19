// ./react-redux-client/src/actions/todoActions.js

const apiUrl = "/api/";

export const addNewNote = (note) => {console.log("***"+note)
  return (dispatch) => {
    dispatch(addNewNoteRequest(note));
    return fetch(apiUrl, {
      method:'post',
      body: note,
    }).then(response => {
      if(response.ok){
        response.json().then(data => {console.log(data.note);
          dispatch(addNewNoteRequestSuccess(data.note, data.message))
        })
      }
      else{
        response.json().then(error => {
          dispatch(addNewNoteRequestFailed(error))
        })
      }
    })
  }
}

export const addNewNoteRequest = (note) => {
  return {
    type: 'ADD_NEW_NOTE_REQUEST',
    note
  }
}

export const addNewNoteRequestSuccess = (note,message) => {
  return {
    type: 'ADD_NEW_NOTE_REQUEST_SUCCESS',
    note:note,
    message:message
  }
}

export const addNewNoteRequestFailed = (error) => {
  return {
    type: 'ADD_NEW_NOTE_REQUEST_FAILED',
    error
  }
}

//Async action
export const fetchNotes = () => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return (dispatch) => {

    dispatch(fetchNotesRequest());
    // Returns a promise
    return fetch(apiUrl)
      .then(response => {
        if(response.ok){
          response.json().then(data => {
            dispatch(fetchNotesSuccess(data.notes,data.message));
          })
        }
        else{
          response.json().then(error => {
            dispatch(fetchNotesFailed(error));
          })
        }
      })
  }
}

export const fetchNotesRequest = () => {
  return {
    type:'FETCH_NOTES_REQUEST'
  }
}

//Sync action
export const fetchNotesSuccess = (notes,message) => {
  return {
    type: 'FETCH_NOTES_SUCCESS',
    notes: notes,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchNotesFailed = (error) => {
  return {
    type:'FETCH_NOTES_FAILED',
    error
  }
}

export const editNote = (note) => {
  console.log(note);
    return (dispatch) => {
      dispatch(editNoteRequest(note));
      return fetch(apiUrl, {
        method:'put',
        body:note
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

export const editNoteRequest = (note) => {
   return {
     type:'EDIT_NOTE_REQUEST',
     note
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
