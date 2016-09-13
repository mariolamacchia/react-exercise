import React from 'react';
import { connect } from 'react-redux'

import styles from '../index.scss';

class CatBreedsList extends React.Component {
  render() {
    const { isFetching, cats } = this.props;
    return (
      <div>
        {isFetching &&
          <p>Fetching</p>
        }
        {!isFetching &&
          cats.map((item, index) => <img className={styles.image} key={index} src={item.images[0].url} />)
        }
      </div>
    )
  }
}

CatBreedsList.propTypes = {
  cats: React.PropTypes.array.isRequired,
  isFetching: React.PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  const { cats } = state
  const {
    isFetching,
    items
  } = cats || {
    isFetching: true,
    items: []
  };

  return {
    isFetching,
    cats: items
  };
}

export default connect(mapStateToProps)(CatBreedsList);
