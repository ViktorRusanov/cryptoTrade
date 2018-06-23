import { takeLatest, select, put, take, call, fork, cancel } from 'redux-saga/effects';
import * as api from '../api/api';
import { loginFailure, loginRequest, loginSuccess, logout, registrationRequest } from '../actions/login';
import { isUserAuthorized } from '../reducers/login';
import { fetchWalletRequest } from '../actions/wallet';
import { getUserInfoRequest } from '../actions/user';

export function* loginFlow() {
  while (true) {
    console.log('loginFlow');
    const isAuthorized = yield select(isUserAuthorized);
    let task;

    if(!isAuthorized) {
      const { payload: { login, password } } = yield take(loginRequest);
      task = yield fork(authorize, login, password);
    }

    const action = yield take([loginSuccess, logout, loginFailure]);
    if (action.type === loginSuccess.toString()) {
      yield put(getUserInfoRequest());
      yield put(fetchWalletRequest());
    }
    if (action.type === 'LOGOUT') yield cancel(task);
    yield call(api.clearTokenApi, 'token');
  }

}

function* authorize(login, password) {
  try {
    const { data: { jwt }} = yield call(api.login, login, password);
    yield call(api.setTokenApi, jwt);
    yield put(loginSuccess());
  } catch (e) {
    yield put({ type: 'LOGIN_ERROR', e });
  }
}

function* registrationFlow(action) {
  try {
    const { payload: { login, password } } = action;
    const token = yield call(api.registration, login, password);
    yield call(api.setTokenApi, { token });
    yield put(loginSuccess, token);
    return token;
  } catch (e) {
    yield put({ type: 'LOGIN_ERROR', e });
  }
}

export function* registrationWatch() {
  yield takeLatest(registrationRequest, registrationFlow);
}