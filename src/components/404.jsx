/**
 * Four0Four
 *
 * 404 page
 */
import React from 'react';
import { connect } from 'react-redux'

import CatImage from './cat-image';

export default class FourOFour extends React.Component {
  render() {
    const cat = { url: 'https://http.cat/404' };
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
