import React from 'react';
import CatImage from './cat-image';

export default class CatIcon extends React.Component {

  render() {
    const { cat } = this.props;
    const iconStyle = {
      width: '48px',
      height: '48px',
      borderRadius: '48px'
    };

    return (
      <CatImage style={iconStyle} cat={cat} />
    )
  }
}

CatIcon.propTypes = {
  cat: React.PropTypes.object.isRequired
};
