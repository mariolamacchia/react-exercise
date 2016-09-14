import React from 'react';
import { connect } from 'react-redux';

// Extend CatPage
import CatPage from './cat-page';
import FourOFour from './404';

const subtitle = 'Use your browser history to go back to the list';

function mapStateToProps(state) {
  // Find the breed written in the url
  const breedSubreddit = (state.router || {params: {}}).params.breed;
  console.log(breedSubreddit);
  const { items: cats, isFetching } = state.cats || { cats: [], isFetching: true};
  let breed = cats.find(item => item.subreddit === breedSubreddit);
  console.log(breed, cats);

  return {
    cats: breed ? breed.images : [],
    title: breed ? breed.name : '',
    subtitle,
    isFetching
  };
}

export default connect(mapStateToProps)(CatPage);
