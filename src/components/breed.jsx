/**
 * Breed
 *
 * Cat breed page (detail page). Extends CatPage
 */
import { connect } from 'react-redux';
import CatPage from './cat-page';

const subtitle = 'Use your browser history to go back to the list';

function mapStateToProps(state) {
  // Find the breed written in the url
  const breedSubreddit = (state.router || {params: {}}).params.breed;
  const { browser } = state;
  const { items: cats, isFetching, error } = state.cats || { cats: [], isFetching: true};
  const breed = cats.find(item => item.subreddit === breedSubreddit) || {};

  return {
    cats: breed.cats, title: breed.name,
    showCatIcon: true, error,
    subtitle, isFetching, browser
  };
}

export default connect(mapStateToProps)(CatPage);
