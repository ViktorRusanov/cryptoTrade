import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import Particles from 'react-particles-js';
import paramsParticle from '../../../assets/particles-params';
import user from '../../../assets/login/user-shape.svg';
import padlock from '../../../assets/login/padlock-unlock.svg';
import logo from '../../../assets/Logo.svg';
import { loginRequest, registrationRequest } from '../../actions/login';
import { isUserAuthorized } from '../../reducers/login';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
`;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RegistrationContainer = styled.div`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0;
  }
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    box-shadow: 0 0 68px 4px rgba(0,0,0,0.23);
    border-radius: 7px;
    margin: 11px 0;
    padding: 10px 20px;
    background: #fff;
  `;

const Img = styled.img`
   width: 300px;
   height: 144px;
`;

const Input = styled.input`
    background: url(${props => props.image}) no-repeat left;
    background-color: rgba(255, 255, 255, 0.5);
    background-size: 19px 19px;
    opacity: 0.4;
    margin: 10px 0;
    padding: 16px 6px 16px 53px;
    border: 1px solid #dfdfdf;
    border-radius: 7px;
    width: calc(100% - 62px);
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 440px;
    height: 100vh;
    margin: 0 auto;
`;

const Button = styled.button`
    margin: 10px 0;
    background-color: #4db6e2;
    color: #fff;
    border: none;
    font-size: 22px;
    padding: 12px 0;
    font-weight: 300;
    letter-spacing: 1.1px;
    cursor: pointer;
`;

const InputWrapper = styled.div`
  position: relative;
  
  input {
    margin: 10px 0;
    padding: 16px 6px 16px 53px;
    border: 1px solid #dfdfdf;
    border-radius: 7px;
    width: calc(100% - 62px);
  }
  
`;
const Icon = styled.span`
  background-image: url(${props => props.image});
  position: absolute;
  width: 19px;
  height: 19px;
  opacity: 0.4;
  background-size: cover;
  top: 25px;
  left: 21px;
`;

class Login extends Component {
  state = {
    login: '',
    password: '',
    isRegistration: false
  }

  handleChangeInput = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value })
  }

  handleClick = () => {
    const { loginRequest, registrationRequest } = this.props;
    const { login, password, isRegistration } = this.state;

    if (login && password) {
      if (isRegistration) {
        registrationRequest({ login, password });
      } else {
        loginRequest({ login, password });
      }
    }
  };

  toggleRegistration = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      isRegistration: !this.state.isRegistration
    })
  }

  render() {
    const { isAuthorized } = this.props;
    if (isAuthorized) return <Redirect to='/exchange' />
    const { login, password, isRegistration } = this.state;
    const buttonName = isRegistration ? 'Зарегистрироваться' : 'Войти';
    const registrationText = isRegistration ? 'Впервые на сайте? ' : 'Уже зарегистрированы? ';
    const linkName = isRegistration ? 'Войти' : 'Регистрация';
    return (
      <Container>
        <Wrapper>
          <Img src={logo} alt="logo" />
          <Form>
            <LoginContainer>
              <InputWrapper>
                <Icon image={user} />
                <input
                  type="text"
                  placeholder="login"
                  name="login"
                  onChange={this.handleChangeInput}
                  value={login}
                />
              </InputWrapper>
              <InputWrapper>
                <Icon image={padlock} />
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  onChange={this.handleChangeInput}
                  value={password}
                />
              </InputWrapper>
              <Button onClick={this.handleClick}>{buttonName}</Button>
            </LoginContainer>
          </Form>
          <Form>
            <RegistrationContainer>
              <p>{registrationText}<a href="" onClick={this.toggleRegistration}>{linkName}</a></p>
            </RegistrationContainer>
          </Form>
        </Wrapper>
      </Container>
    );
  }
}

Login.propTypes = {};
Login.defaultProps = {};

const mapStateToProps = state => ({
  isAuthorized: isUserAuthorized(state)
});
const mapDispatchToProps = {
  loginRequest,
  registrationRequest
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
