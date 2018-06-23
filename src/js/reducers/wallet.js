import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { fetchWalletSuccess } from '../actions/wallet';

const isLoading = handleActions({}, false);
const coins = handleActions({
  [fetchWalletSuccess]: (state, { payload: { btc, eth, usd } }) => ({
    ...state,
    ...{ btc, eth, usd }
  })
}, { btc: 0, eth: 0, usd: 0 });

export const getWallet = state => state.wallet.coins;

export default combineReducers({ isLoading, coins });