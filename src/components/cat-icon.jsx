import React from 'react';

import styles from '../index.scss';

export default class CatIcon extends React.Component {

  render() {
    const { cat } = this.props;

    let divStyle = {
      backgroundImage: 'url(' + cat.url + ')',
      width: '48px',
      height: '48px',
      borderRadius: '48px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };

    return (
      <div style={divStyle} className={styles.cat} />
    )
  }
}

CatIcon.propTypes = {
  cat: React.PropTypes.object.isRequired
};
