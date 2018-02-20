const INITIAL_STATE = {}

export  const authReducer = (currentState = INITIAL_STATE, action) => {
  // console.log(action);
  switch(action.type) {
    case 'SIGNIN_REQUEST':
    return { ...currentState, authenticated: false };
    case 'AUTHENTICATED':
      return { ...currentState, successMsg: action.message, user: action.user, authenticated: true };
    case 'AUTHENTICATION_ERROR':
      return { ...currentState, error: action.payload };
    case 'REGISTER_REQUEST':
    return { ...currentState, authenticated: false };
    case 'REGISTER_REQUEST_SUCCESS':
      return { ...currentState, authenticated: false };
    case 'REGISTER_REQUEST_ERROR':
      return { ...currentState, error: action.payload };
    case 'SIGNOUT_REQUEST':
    return { ...currentState };
    case 'UNAUTHENTICATED':
      return { ...currentState, successMsg: action.message, authenticated: false };
    case 'SIGNOUT_ERROR':
      return { ...currentState, error: action.payload };
    default:
      return currentState;
  }
}
