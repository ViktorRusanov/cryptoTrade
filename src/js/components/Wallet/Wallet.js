import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WalletWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  
  input {
    background: #404243;
    border: none;
    border-radius: 3px;
    margin: 10px 5px 0 0;
    width: 225px;
    height: 31px;
  }
`;


class Wallet extends Component {
  render() {
    const { wallet: { btc, eth, usd} } = this.props;
    return (
      <WalletWrapper>
        <h2>Ваш счёт</h2>
        <input type="text" value={btc} />BTC
        <input type="text" value={eth}/>ETH
        <input type="text" value={usd}/>USD
      </WalletWrapper>
    );
  }
}

Wallet.propTypes = {};
Wallet.defaultProps = {};

export default Wallet;
