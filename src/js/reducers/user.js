import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux';
import { getUserInfoSuccess } from '../actions/user';

const userInfo = handleActions({
  [getUserInfoSuccess]: (state, action) => action.payload
}, null);

export default combineReducers({userInfo});