const registerUrl = "/api/register/";

export const register = (formData) => {
  return (dispatch) => {
    dispatch(registerRequest(formData));
    return fetch(registerUrl, {
      method:'post',
      body: formData,
    }).then(response => {
      if(response.ok){
        response.json().then(data => {console.log(data);
          dispatch(registerRequestSuccess(data.user, data.message))
        })
      }
      else{
        response.json().then(error => {
          dispatch(registerRequestFailed(error))
        })
      }
    })
  }
}

export const registerRequest = (data) => {
  return {
    type: 'REGISTER_REQUEST',
    data
  }
}

export const registerRequestSuccess = (user, message) => {
  return {
    type: 'REGISTER_REQUEST_SUCCESS',
    user: user,
    message: message
  }
}

export const registerRequestFailed = (error) => {
  return {
    type: 'REGISTER_REQUEST_ERROR',
    error
  }
}

const apiUrl = "/api/sign-in/";

export const signIn = (formData) => {
  return (dispatch) => {
    dispatch(signInRequest(formData));
    return fetch(apiUrl, {
      method:'post',
      body: formData,
    }).then(response => {
      if(response.ok){
        response.json().then(data => {console.log(data);
          dispatch(signInRequestSuccess(data.user, data.message))
        })
      }
      else{
        response.json().then(error => {
          dispatch(signInRequestFailed(error))
        })
      }
    })
  }
}

export const signInRequest = (data) => {
  return {
    type: 'SIGNIN_REQUEST',
    data
  }
}

export const signInRequestSuccess = (user, message) => {
  return {
    type: 'AUTHENTICATED',
    user: user,
    message: message
  }
}

export const signInRequestFailed = (error) => {
  return {
    type: 'AUTHENTICATION_ERROR',
    error
  }
}

const signOutUrl = "/api/sign-out"

export const signOut = () => {
  return (dispatch) => {
    dispatch(signOutRequest());
    return fetch(signOutUrl, {
      method:'get'
    }).then(response => {
      if(response.ok){
        response.json().then(data => {console.log(data);
          dispatch(signOutRequestSuccess(data.message))
        })
      }
      else{
        response.json().then(error => {
          dispatch(signOutRequestFailed(error))
        })
      }
    })
  }
}

export const signOutRequest = () => {
  return {
    type: 'SIGNOUT_REQUEST',
  }
}

export const signOutRequestSuccess = (user, message) => {
  return {
    type: 'UNAUTHENTICATED',
    user: user,
    message: message
  }
}

export const signOutRequestFailed = (error) => {
  return {
    type: 'SIGNOUT_ERROR',
    error
  }
}
