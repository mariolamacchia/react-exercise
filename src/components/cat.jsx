import React from 'react';
import { connect } from 'react-redux'

export default class Cat extends React.Component {

  render() {
    const { cat } = this.props;
    return (
      <img src={cat.url} />
    )
  }
}

Cat.propTypes = {
  cat: React.PropTypes.object.isRequired
};
