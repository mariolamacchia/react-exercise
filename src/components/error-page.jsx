/**
 * Error page
 */
import React from 'react';
import { connect } from 'react-redux'

import CatImage from './cat-image';

export default class ErrorPage extends React.Component {
  render() {
    const { errorCode } = this.props;
    const cat = { url: 'https://http.cat/' + errorCode };
    const style = {
      height: '100vh',
      width: '100vw',
      backgroundSize: 'contain',
      backgroundColor: '#000000'
    };

    return (
      <CatImage cat={cat} style={style} />
    )
  }
}

ErrorPage.propTypes = {
  errorCode: React.PropTypes.string.isRequired
};
