import { takeLatest, put, call } from 'redux-saga/effects'
import { getUserInfo } from '../api/api';
import { getUserInfoFailure, getUserInfoRequest, getUserInfoSuccess } from '../actions/user';

function* fetchUserFlow() {
  try {
    const response = yield call(getUserInfo);
    yield put(getUserInfoSuccess(response.data));
  } catch (e) {
    yield put(getUserInfoFailure())
  }
}

export function* fetchUserWatcher() {
  yield takeLatest(getUserInfoRequest, fetchUserFlow)
}