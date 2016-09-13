import React from 'react';
import { connect } from 'react-redux';

import CatsList from './cats-list';

class Home extends React.Component {
  render() {
    const { cats } = this.props;
    return (
      <div>
        <h1>All categories</h1>
        <h2>Click on your favourite cat to explore its photos</h2>
        <CatsList cats={cats} />
      </div>
    )
  }
}

Home.propTypes = {
  cats: React.PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  // return an array with the first cat for each breed
  let { items: cats } = state.cats || { cats: [] };
  cats = cats.map(breed => breed.images[0]);
  return { cats };
}

export default connect(mapStateToProps)(Home);
