import { fork, all } from 'redux-saga/effects';
import { fetchUserWatcher } from './user';
import { loginFlow, registrationWatch } from './login';
import { fetchWalletWatcher } from './wallet';

export default function* () {
  yield all([
    fork(loginFlow),
    fork(fetchUserWatcher),
    fork(registrationWatch),
    fork(fetchWalletWatcher)
  ])
}