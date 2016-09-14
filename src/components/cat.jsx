import React from 'react';
import { connect } from 'react-redux';

import { GridTile } from 'material-ui/GridList';

import styles from '../index.scss';

export default class Cat extends React.Component {

  handleClick(e, cat) {
    e.preventDefault();
    this.props.onClick(e, cat);
  }

  render() {
    const { cat, onClick } = this.props;

    let divStyle = {
      backgroundImage: 'url(' + cat.url + ')',
    };

    return (
      <GridTile title={cat.name}>
        { onClick &&
          <a href="#" onClick={(e) => this.handleClick(e, cat)}>
            <div style={divStyle} className={styles.cat} />
          </a>
        }
        { !onClick &&
          <div style={divStyle} className={styles.cat} />
        }
      </GridTile>
    )
  }
}

Cat.propTypes = {
  cat: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func
};
