import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header';
import { fetchWalletRequest } from '../../actions/wallet';
import Wallet from '../Wallet';
import { getWallet } from '../../reducers/wallet';

const Trade = styled.div`
  display: flex;
  flex-direction: column;
`;

const WrapperInput = styled.div`
  display: flex;
  
  input {
    background: #f2f2f2;
    border: none;
    border-radius: 3px;
    width: 155px;
    height: 31px;
    margin: 10px 5px 0 0;
  }
`;

const Button = styled.button`
  width: 100px;
  margin: 10px 0 0 20px;
  height: 31px;
  border: 0;
  color: #fff;
  padding: 5px 0 3px;
  border-radius: 3px;
`;

const ButtonSell = Button.extend`
  background-color: #cb5f58;
  &:hover {
    background-color: #ba564f;
  }
`;
const ButtonPurchase = Button.extend`
  background-color: #69b3dc;
  &:hover {
    background-color: #63acd5;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
const TradeChart = styled.div``;

const TradeHistory = styled.div``;

class Exchange extends Component {
  componentDidMount() {
    const { fetchWalletRequest, } = this.props;
    // fetchWalletRequest();
  }

  render() {
    const { wallet } = this.props;
    return (
      <div>
        <Header />
        <MainContainer>
        <Container>
          <Wallet wallet={wallet}/>
          <Trade>
            <h2>Покупка/продажа</h2>
            <WrapperInput><input type="text" /></WrapperInput>
            <WrapperInput><input type="text" /><ButtonSell>Продать</ButtonSell></WrapperInput>
            <WrapperInput><input type="text" /><ButtonPurchase>Купить</ButtonPurchase></WrapperInput>
          </Trade>
        </Container>
        <Container>
          <TradeChart>
            <h2>Окно графика</h2>
          </TradeChart>
          <TradeHistory>
            <h2>История операций</h2>
          </TradeHistory>
        </Container>
        </MainContainer>
      </div>
    );
  }
}

Exchange.propTypes = {};
Exchange.defaultProps = {};
const mapStateToProps = state =>({
  wallet: getWallet(state)
});
const mapDispatchToProps = {
  fetchWalletRequest
};
export default connect(mapStateToProps, mapDispatchToProps)(Exchange);
