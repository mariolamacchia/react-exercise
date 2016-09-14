import React from 'react';
import { connect } from 'react-redux'

import Cat from './cat';

/**
 * Since The only difference between Home and Breed pages is the navbar,
 * I'll make a general component that will be extended
 */
export default class CatPage extends React.Component {
  render() {
    const { cats, isFetching, title, subtitle, onCatClicked } = this.props;
    return (
      <div>
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          {!isFetching &&
            cats.map((cat, index) => <Cat cat={cat} onClick={() => console.log('fired')} key={index} /> )
          }
        </div>
      </div>
    )
  }
}

CatPage.propTypes = {
  cats: React.PropTypes.array.isRequired,
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  onCatClicked: React.PropTypes.func
};
