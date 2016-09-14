/**
 * Home
 *
 * Home page with list of cats. Extends CatPage
 */
import React from 'react';
import { connect, dispatch } from 'react-redux';
import { push } from 'redux-router';
import CatPage from './cat-page';

const title = 'All categories';
const subtitle = 'Click on your favourite cat to see all the images';

function onCatClick(e, cat) {
  return push({ pathname: '/' + cat.breed });
}

function mapStateToProps(state) {
  const { items: breeds, isFetching } = state.cats || { breeds: [], isFetching: true};
  let cats = breeds.map(breed => Object.assign(
    {}, breed.cats[0], { breed: breed.subreddit, name: breed.name }
  ));
  return { cats, title, subtitle, onCatClick, isFetching };
}

export default connect(mapStateToProps, { onCatClick })(CatPage);
