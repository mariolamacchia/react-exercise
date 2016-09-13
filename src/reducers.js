import { REQUEST_CATS, RECEIVE_CATS, FAIL_CATS_REQUEST } from './actions';

export function cats(state = {
  isFetching: true,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_CATS:
      return Object.assign({}, {
        isFetching: true
      }, state);
    case RECEIVE_CATS:
      return Object.assign({}, {
        isFetching: false,
        items: action.cats,
        error: null
      }, state);
    case FAIL_CATS_REQUEST:
      return Object.assign({}, {
        isFetching: false,
        error: action.error
      }, state);
    default:
      return state;
  }
}
