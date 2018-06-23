import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  loginFailure,
  loginRequest,
  loginSuccess,
  logout
} from '../actions/login';
// import initState from './initState';
const initState = {
  isAuthorized: false,
  loginError: null
};

const isAuthorized = handleActions(
  {
    [loginSuccess]: () => true,
    [logout]: () => false
  },
  false
);

const loginError = handleActions(
  {
    [loginFailure]: (state, action) => action.payload,
    // [loginRequest]: () => null,
    [loginSuccess]: () => null
  },
  initState
);

export default combineReducers({
  isAuthorized,
  loginError
});


export const isUserAuthorized = state => state.login.isAuthorized;
export const getErrorData = state => state.auth.loginError;