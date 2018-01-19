// ./react-redux-client/src/reducers/noteReducer.js
const INITIAL_STATE = {
  notes:[],
  note:null,
  isFetching: false,
  error: null,
  successMsg:null,
  // showDeleteModal: false,
  noteToDelete: null,
  // showEditModal: false,
  // noteToEdit: null,
  newNote: null
}

export  const noteReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_NOTES_REQUEST':
          return {
            ...currentState,
            notes:[],
            note:null,
            isFetching: true,
            error: null,
            successMsg:null,
            // showDeleteModal: false,
            noteToDelete: null,
            // showEditModal: false,
            // noteToEdit: null,
          }

    case 'FETCH_NOTES_SUCCESS':
          return {
            ...currentState,
            notes:action.notes,
            note:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            // showDeleteModal: false,
            noteToDelete: null,
            // showEditModal: false,
            // noteToEdit: null,
          }

    case 'FETCH_NOTES_FAILED':
          return {
            ...currentState,
            notes:[],
            note:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            // showDeleteModal: false,
            noteToDelete: null,
            // showEditModal: false,
            // noteToEdit: null,
          }

    case 'FETCH_NOTE_REQUEST':
          return {
            ...currentState,
            notes:currentState.notes,
            note:null,
            isFetching: true,
            error: null,
            successMsg:null,
            // showDeleteModal: false,
            noteToDelete: null,
            // showEditModal: false,
            // noteToEdit: null,
          }

    case 'FETCH_NOTE_SUCCESS':
          return {
            ...currentState,
            notes:currentState.notes,
            note:action.note,
            isFetching: false,
            error: null,
            successMsg:action.message,
            // showDeleteModal: false,
            noteToDelete: null,
            // showEditModal: false,
            // noteToEdit: null,
          }

    case 'FETCH_NOTE_FAILED':
          return {
            ...currentState,
            notes:[],
            note:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            // showDeleteModal: false,
            noteToDelete: null,
            // showEditModal: false,
            // noteToEdit: null,
          }

    case 'ADD_NEW_NOTE_REQUEST':
          return {
            ...currentState,
            notes:currentState.notes,
            note:null,
            isFetching: true,
            error: null,
            successMsg:null,
            // showDeleteModal: false,
            noteToDelete: null,
            // showEditModal: false,
            // noteToEdit: null,
            newNote: action.note
          }

    case 'ADD_NEW_NOTE_REQUEST_FAILED':
          return {
            ...currentState,
            notes:currentState.notes,
            note:null,
            isFetching: true,
            error: action.error,
            successMsg:null,
            // showDeleteModal: false,
            noteToDelete: null,
            // showEditModal: false,
            // noteToEdit: null,
            newNote: null
          }

    case 'ADD_NEW_NOTE_REQUEST_SUCCESS':
          const nextState =  {
            ...currentState,
            notes:[...currentState.notes, action.note],
            note:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            // showDeleteModal: false,
            noteToDelete: null,
            // showEditModal: false,
            // noteToEdit: null,
            newNote: action.note
          }
        return nextState;

    case 'EDITING_NOTE':
      action.note.editing = true;
      return {
        ...currentState,
        notes:currentState.notes,
        note: action.note,
        isFetching: true,
        error: null,
        successMsg:null,
        // showDeleteModal: false,
        noteToDelete: null,
        // showEditModal: true,
        // noteToEdit: action.note,
        newNote: null
      }

    case 'EDIT_NOTE_REQUEST':
          return {
            ...currentState,
            notes:currentState.notes,
            note:null,
            isFetching: true,
            error: null,
            successMsg:null,
            // showDeleteModal: false,
            noteToDelete: null,
            // showEditModal: true,
            // noteToEdit: action.note,
            newNote: null
          }

    case 'EDIT_NOTE_SUCCESS':
         action.note.editing = false;
         const updatedNotes = currentState.notes.map((note) => {
           if(note._id !== action.note._id){
             //This is not the item we care about, keep it as is
             return note;
           }
           //Otherwise, this is the one we want to return an updated value
           return { ...note, ...action.note }
         })
          return {
            ...currentState,
            notes:updatedNotes,
            note:action.note,
            isFetching: false,
            error: null,
            successMsg:action.message,
            // showDeleteModal: false,
            noteToDelete: null,
            // showEditModal: true,
            // noteToEdit: action.note,
            newNote: null
          }

  case 'EDIT_NOTE_FAILED':
        return {
          ...currentState,
          notes:currentState.notes,
          note:null,
          isFetching: false,
          error: action.error,
          successMsg:null,
          // showDeleteModal: false,
          noteToDelete: null,
          // showEditModal: true,
          noteToEdit: currentState.noteToEdit,
          newNote: null
        }

  case 'DELETE_NOTE_REQUEST':
        action.note.editing = false;
        return {
          ...currentState,
          notes:currentState.notes,
          note:null,
          isFetching: true,
          error: null,
          successMsg:null,
          // showDeleteModal: true,
          noteToDelete: action.note,
          // showEditModal: false,
          // noteToEdit: null,
          newNote: null
        }

  case 'DELETE_NOTE_SUCCESS':
        const filteredNotes = currentState.notes.filter((note) => note._id !== currentState.note._id)
        return {
          ...currentState,
          notes:filteredNotes,
          note:null,
          isFetching: false,
          error: null,
          successMsg:action.message,
          // showDeleteModal: true,
          noteToDelete: null,
          // showEditModal: false,
          // noteToEdit: null,
          newNote: null
        }


  case 'DELETE_NOTE_FAILED':
        return {
          ...currentState,
          notes:currentState.notes,
          note:null,
          isFetching: false,
          error: action.error,
          successMsg:null,
          // showDeleteModal: true,
          noteToDelete: null,
          // showEditModal: false,
          // noteToEdit: null,
          newNote: null
        }

    default:
       return currentState;

  }
}
