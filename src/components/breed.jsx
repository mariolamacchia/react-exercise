/**
 * Breed
 *
 * Cat breed page (detail page). Extends CatPage
 */
import { connect } from 'react-redux';
import CatPage from './cat-page';

const subtitle = 'Use your browser history to go back to the list';

function mapStateToProps(state) {
  // Get the url param
  const breedSubreddit = (state.router || {params: {}}).params.breed;
  // Get the browser state
  const { browser } = state;
  // Get cats state
  const { items: cats, isFetching, error } = state.cats || { cats: [], isFetching: true};
  // Get cats from the `breedSubreddit` breed
  const breed = cats.find(item => item.subreddit === breedSubreddit) || {};

  return {
    cats: breed.cats, title: breed.name,
    showCatIcon: true, error,
    subtitle, isFetching, browser
  };
}

export default connect(mapStateToProps)(CatPage);
