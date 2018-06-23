import React, { Component } from 'react';
import { createStore } from 'redux';

import styled from 'styled-components';
import LoginForm from './LoginForm';
import Particles from 'react-particles-js';
import paramsParticle from '../../../assets/particles-params';

const Main = styled.main`
  background: #f5f5f6;
`;

class App extends Component {
  render() {

    return (
      <Main>
        {/*<Exchange />*/}
        <LoginForm />
        <Particles params={paramsParticle} height="100vh" />
      </Main>
    );
  }
}

export default App;
