import { call, put, takeLatest } from 'redux-saga/effects';
import { getWallet } from '../api/api';
import { fetchWalletFailure, fetchWalletRequest, fetchWalletSuccess } from '../actions/wallet';

function* fetchWalletFlow() {
  try {
    const response = yield call(getWallet);
    yield put(fetchWalletSuccess(response.data.result));
  } catch (e) {
    yield put(fetchWalletFailure(e));
  }
}

export function* fetchWalletWatcher() {
  yield takeLatest(fetchWalletRequest, fetchWalletFlow);
}