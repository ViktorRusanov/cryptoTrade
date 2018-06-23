import { createActions } from 'redux-actions';

export const {
  login: {
    logout,
    loginRequest,
    loginSuccess,
    loginFailure,
    registrationRequest
  }
} = createActions({
  LOGIN: {
    LOGOUT: undefined,
    LOGIN_REQUEST: undefined,
    LOGIN_SUCCESS: undefined,
    LOGIN_FAILURE: undefined,
    REGISTRATION_REQUEST: undefined
  }
});