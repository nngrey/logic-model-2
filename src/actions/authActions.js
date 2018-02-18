// import axios from 'axios';

// export const AUTHENTICATED = 'authenticated_user';
// export const UNAUTHENTICATED = 'unauthenticated_user';
// export const AUTHENTICATION_ERROR = 'authentication_error';
//
// const URL = 'http://www.sample-website.com';
//
// export function signInAction({ email, password }, history) {
//   return async (dispatch) => {
//     try {
//       const res = await axios.post(`${URL}/signin`, { email, password });
//
//       dispatch({ type: AUTHENTICATED });
//       localStorage.setItem('user', res.data.token);
//       history.push('/secret');
//     } catch(error) {
//       dispatch({
//         type: AUTHENTICATION_ERROR,
//         payload: 'Invalid email or password'
//       });
//     }
//   };
// }

const apiUrl = "/api/sign_in/";

export const signIn = (values) => {
  return (dispatch) => {
    dispatch(signInRequest(values));
    return fetch(apiUrl, {
      method:'post',
      body: values,
    }).then(response => {
      if(response.ok){
        response.json().then(data => {console.log(data);
          dispatch(signInRequestSuccess(data))
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


export const signInRequest = (values) => {
  return {
    type: 'SIGNIN_REQUEST',
    values
  }
}

export const signInRequestSuccess = (data) => {
  return {
    type: 'AUTHENTICATED',
    data
  }
}

export const signInRequestFailed = (data) => {
  return {
    type: 'AUTHENTICATION_ERROR',
    data
  }
}
