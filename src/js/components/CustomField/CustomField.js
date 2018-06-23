import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomField extends Component {
  render() {
    const { input, type, urlImg, placeholder } = this.props;
    return (
      <FieldWrapper>
        <Img url={urlImg} />
        <input {...input} placeholder={placeholder} type={type} />
      </FieldWrapper>
    );
  }
}

CustomField.propTypes = {};
CustomField.defaultProps = {};

export default CustomField;
