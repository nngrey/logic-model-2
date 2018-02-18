const apiUrl = "/api/";

export const addNewNote = (noteData) => {
  return (dispatch) => {
    dispatch(addNewNoteRequest(noteData));
    return fetch(apiUrl, {
      method:'post',
      body: noteData,
    }).then(response => {
      if(response.ok){
        response.json().then(data => {console.log(data.note);
          dispatch(addNewNoteRequestSuccess(data.note, data.message))
        })
      } else {
        response.json().then(error => {
          dispatch(addNewNoteRequestFailed(error))
        })
      }
    })
  }
}

export const addNewNoteRequest = (note) => {
  // const store = configureStore();
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

export const editingNote = (note) => {
  return {
    type:'EDITING_NOTE',
    note
  }
}

export const editNote = (data) => {
    return (dispatch) => {
      dispatch(editNoteRequest(data));
      return fetch(apiUrl, {
        method:'put',
        body:data
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


export const detachFromLane = (laneId, noteId) => {
  this.setState({
    lanes: this.lanes.map(lane => {
      if(lane.id === laneId) {
        lane.notes = lane.notes.filter(note => note !== noteId);
      }

      return lane;
    })
  });
}

export const move = (lanes, notes, sourceId, targetId) => {
  const sourceNote = notes.filter(note => note._id === sourceId)[0];
  const targetNote = notes.filter(note => note._id === targetId)[0];
  const sourceLaneNotes = notes.filter(note => note.laneId === sourceNote.laneId);
  const targetLaneNotes = notes.filter(note => note.laneId === targetNote.laneId);

  const sourceNoteIndex = sourceLaneNotes.indexOf(sourceNote);
  const targetNoteIndex = targetLaneNotes.indexOf(targetNote);

  return (dispatch) => {
    if(sourceNote.laneId === targetNote.laneId) {
      // move at once to avoid complications
      sourceLaneNotes.splice(sourceNoteIndex, 1);
      sourceLaneNotes.splice(targetNoteIndex, 0, sourceNote);
    } else {
      // get rid of the source
      sourceLaneNotes.splice(sourceNoteIndex, 1);
      // and move it to target
      targetLaneNotes.splice(targetNoteIndex, 0, sourceNote);
    }

  return (dispatch) => {
    const data = new FormData();
    data.append('id', sourceNote._id);
    data.append('laneId', targetNote.laneId);
    dispatch(editNote(data));
  }
}
}
