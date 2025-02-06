import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

const loginSuccess = () => {
  return { type: LOGIN_SUCCESS };
};

const loginFailure = () => {
  return { type: LOGIN_FAILURE };
};

const loginRequest = (email, password) => {
  return (dispatch) => {
    dispatch(login(email, password));
    fetch('/login-success.json')
      .then((response) => response.json())
      .then((data) => dispatch(loginSuccess()))
      .catch((error) => dispatch(loginFailure()));
  };
};
