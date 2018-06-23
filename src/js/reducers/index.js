import { combineReducers  } from 'redux';
import user from './user';
import login from './login';
import wallet from './wallet';

export default combineReducers({login, user, wallet});