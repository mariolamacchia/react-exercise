/**
 * Four0Four
 *
 * 404 page
 */
import React from 'react';
import { connect } from 'react-redux'

import Cat from './cat';

export default class FourOFour extends React.Component {
  render() {
    const cat = { url: 'https://http.cat/404' }
    return (
      <Cat cat={cat} />
    )
  }
}
