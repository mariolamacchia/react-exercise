import React from 'react';
import { connect, dispatch } from 'react-redux';
import { push } from 'redux-router';

// Extend CatPage
import CatPage from './cat-page';

const title = 'All categories';
const subtitle = 'Click on your favourite cat to see all the images';

function onCatClicked(cat) {
  dispatch(push('/' + cat.breed));
}

function mapStateToProps(state) {
  const { items: breeds, isFetching } = state.cats || { breeds: [], isFetching: true};
  let cats = breeds.map(breed => Object.assign(
    {}, breed.images[0], { breed: breed.subreddit}
  ));
  return { cats, title, subtitle, onCatClicked, isFetching };
}

export default connect(mapStateToProps)(CatPage);
