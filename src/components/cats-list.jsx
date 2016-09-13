import React from 'react';
import { connect } from 'react-redux'

import Cat from './cat';

export default class CatsList extends React.Component {

  render() {
    const { cats } = this.props;
    return (
      <div>
        {cats.map((item, index) => <Cat cat={item} key={index} />)}
      </div>
    )
  }
}

CatsList.propTypes = {
  cats: React.PropTypes.array.isRequired
};
