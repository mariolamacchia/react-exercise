import React from 'react';
import { connect } from 'react-redux';

import CatsList from './cats-list';
import FourOFour from './404';

class Breed extends React.Component {
  render() {
    const { breed } = this.props;
    return (
      <div>
        {!breed &&
          <FourOFour />
        }
        {breed &&
          <div>
            <h1>{breed.name}</h1>
            <h2>Use your browser history to go back to the list</h2>
            <CatsList cats={breed.images} />
          </div>
        }
      </div>
    )
  }
}

Breed.propTypes = {
  breed: React.PropTypes.object
};

function mapStateToProps(state) {
  // Find the breed written in the url
  const breedSR = (state.router || {params: {}}).params.breed;
  const { items: cats } = state.cats || { cats: [] };
  let breed = cats.find(item => return item.subreddit === breedSR);
  return { breed };
}

export default connect(mapStateToProps)(Breed);
