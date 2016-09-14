import { combineReducers } from 'redux';
import { responsiveStateReducer } from 'redux-responsive';
import { routerStateReducer } from 'redux-router';

import { REQUEST_CATS, RECEIVE_CATS, FAIL_CATS_REQUEST } from './actions';

function cats(state = {
  isFetching: true,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_CATS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_CATS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.cats,
        error: null
      });
    case FAIL_CATS_REQUEST:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    default:
      return state;
  }
}

export default combineReducers({
  browser: responsiveStateReducer,
  router: routerStateReducer,
  cats
});
