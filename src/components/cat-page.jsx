import React from 'react';
import { connect } from 'react-redux'

import AppBar from 'material-ui/AppBar';

import Cat from './cat';

/**
 * Since The only difference between Home and Breed pages is the navbar,
 * I'll make a general component that will be extended
 */
export default class CatPage extends React.Component {
  getIcon() {
    const { cats, showCatIcon } = this.props;
    if (showCatIcon && cats.length) {
      return <img src={cats[0].url} />;
    }
  }

  render() {
    const { cats, isFetching, title, subtitle, onCatClick } = this.props;
    return (
      <div>
        <AppBar iconElementLeft={this.getIcon()} title={title} />
        <h2>{subtitle}</h2>
        {!isFetching &&
          cats.map((cat, index) => <Cat cat={cat} onClick={onCatClick} key={index} /> )
        }
      </div>
    )
  }
}

CatPage.propTypes = {
  cats: React.PropTypes.array.isRequired,
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  onCatClicked: React.PropTypes.func,
  showCatIcon: React.PropTypes.bool
};
