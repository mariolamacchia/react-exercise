/**
 * Home
 *
 * Home page with list of cats. Extends CatPage
 */
import { connect } from 'react-redux';
import { push } from 'redux-router';
import CatPage from './cat-page';

const title = 'All categories';
const subtitle = 'Click on your favourite cat to see all the images';

function onCatClick(e, cat) {
  return push({ pathname: cat.breed });
}

function mapStateToProps(state) {
  // Get cats state
  const { items: breeds, isFetching, error } = state.cats || { items: [], isFetching: true};
  // Get browser state
  const { browser } = state;
  // Map an array with the first cat of each breed
  let cats = breeds.map(breed => Object.assign(
    {}, breed.cats[0], { breed: breed.subreddit, name: breed.name }
  ));
  
  return {
    cats, title,
    subtitle, isFetching,
    error, browser
  };
}

export default connect(mapStateToProps, { onCatClick })(CatPage);
