import React from 'react';
import { connect } from 'react-redux'

class CatsList extends React.Component {

  render() {
    const { isFetching, items } = this.props;
    return (
      <div>
        {isFetching &&
          <p>Loading</p>
        }
        {!isFetching &&
          items.forEach(item =>
            <img src="{item.url}" />
          )
        }
      </div>
    )
  }
}

CatsList.propTypes = {
  cats: React.PropTypes.array.isRequired
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

  console.log('FIREDD!!!!!!!!!!!!!!!!!!!!!', state, isFetching, items);

  return {
    isFetching,
    cats: items
  };
}

export default connect(mapStateToProps)(CatsList);
