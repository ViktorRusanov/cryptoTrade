import { createActions } from 'redux-actions';
export const {
  user: {
    getUserInfoRequest,
    getUserInfoSuccess,
    getUserInfoFailure
  },
} = createActions({
  USER: {
    GET_USER_INFO_REQUEST: null,
    GET_USER_INFO_SUCCESS: null,
    GET_USER_INFO_FAILURE: null,
  },
});
