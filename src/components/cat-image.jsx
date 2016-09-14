import React from 'react';

export default class CatImage extends React.Component {

  render() {
    const { cat, style } = this.props;

    const divStyle = Object.assign({
      backgroundImage: 'url(' + cat.url + ')',
      height: '100%',
    	width: '100%',
    	backgroundRepeat: 'no-repeat',
    	backgroundPosition: 'center',
    	backgroundSize: 'cover'
    }, style);

    return (
      <div style={divStyle} style={divStyle} />
    )
  }
}

CatImage.propTypes = {
  cat: React.PropTypes.object.isRequired,
  style: React.PropTypes.object
};
