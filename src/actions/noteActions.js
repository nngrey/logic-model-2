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
  console.log("+++"+ note)
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

// export const fetchTodoById = (todoId) => {
//   return (dispatch) => {
//     dispatch(fetchTodoRequest());
//       // Returns a promise
//       return fetch(apiUrl + todoId)
//              .then(response => {console.log(response)
//                if(response.ok){
//                  response.json().then(data => {
//                    dispatch(fetchTodoSuccess(data.todo[0], data.message));
//                  })
//                }
//                else{
//                  response.json().then(error => {
//                    dispatch(fetchTodoFailed(error));
//                  })
//                }
//              })
//
//   }
// }
//
// export const fetchTodoRequest = () => {
//   return {
//     type:'FETCH_TODO_REQUEST'
//   }
// }


//Sync action
// export const fetchTodoSuccess = (todo,message) => {
//   return {
//     type: 'FETCH_TODO_SUCCESS',
//     todo: todo,
//     message: message,
//     receivedAt: Date.now
//   }
// }
//
// export const fetchTodoFailed = (error) => {
//   return {
//     type:'FETCH_TODO_FAILED',
//     error
//   }
// }

// export const showEditModal = (todoToEdit) => {
//   return {
//     type:'SHOW_EDIT_MODAL',
//     todo:todoToEdit
//   }
// }
//
// export const hideEditModal = () => {
//   return {
//     type:'HIDE_EDIT_MODAL'
//   }
// }
//
// export const editTodo = (todo) => {
//     return (dispatch) => {
//       dispatch(editTodoRequest(todo));
//       return fetch(apiUrl, {
//         method:'put',
//         body:todo
//       }).then(response => {
//         if(response.ok){
//           response.json().then(data => {
//             dispatch(editTodoSuccess(data.todo,data.message));
//           })
//         }
//         else{
//           response.json().then(error => {
//             dispatch(editTodoFailed(error));
//           })
//         }
//       })
//     }
// }
//
// export const editTodoRequest = (todo) => {
//    return {
//      type:'EDIT_TODO_REQUEST',
//      todo
//    }
// }
//
// export const editTodoSuccess = (todo,message) => {
//   return {
//     type:'EDIT_TODO_SUCCESS',
//     todo:todo,
//     message:message
//   }
// }
//
// export const editTodoFailed = (error) => {
//   return {
//     type:'EDIT_TODO_FAILED',
//     error
//   }
// }

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

// export const showDeleteModal = (todoToDelete) => {
//   return {
//     type:'SHOW_DELETE_MODAL',
//     todo:todoToDelete
//   }
// }
//
// export const hideDeleteModal = () => {
//   return {
//     type:'HIDE_DELETE_MODAL'
//   }
// }
