import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../../assets/Logo-white.svg';
import PropTypes from 'prop-types';

const HeaderApp = styled.header`
  display: flex;
  background: #2b2c2e;
  height: 80px;
`;

const ImgLogo = styled.img`
  width: 180px;
`;

const Btn = styled.button`
  height: 80px;
  width: 100px;
  color: white;
  //background-color: rgb(255, 255, 255);
  opacity: 0.102;
  margin: 0 8px;
  text-decoration: none;
`;
class Header extends Component {
  render() {
    return (
      <HeaderApp>
        <ImgLogo src={logo} alt="logo" />
        <Btn>1 BTC</Btn>
        <Btn>1 ETH</Btn>
        <span>vr@test.ru</span>
      </HeaderApp>
    );
  }
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
