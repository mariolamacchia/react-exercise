/**
 * Cat
 *
 * Cat list element
 */
import React from 'react';
import { GridTile } from 'material-ui/GridList';
import CatImage from './cat-image';

export default class Cat extends React.Component {

  handleClick(e, cat) {
    e.preventDefault();
    this.props.onClick(e, cat);
  }

  render() {
    const { cat, onClick } = this.props;

    return (
      <GridTile title={cat.name}>
        { onClick &&
          <a href="#" onClick={(e) => this.handleClick(e, cat)}>
            <CatImage cat={cat} />
          </a>
        }
        { !onClick && <CatImage cat={cat} />}
      </GridTile>
    )
  }
}

Cat.propTypes = {
  cat: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func
};
