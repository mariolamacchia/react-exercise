import fetch from 'isomorphic-fetch'

// REQUEST_CATS
export const REQUEST_CATS = 'REQUEST_CATS';
function requestCats() {
  return {
    type: REQUEST_CATS
  };
}

// RECEIVE_CATS
export const RECEIVE_CATS = 'RECEIVE_CATS';
function receiveCats(cats) {
  return {
    type: RECEIVE_CATS,
    cats,
    receivedAt: Date.now()
  };
}

// Fetch
export function fetchCats() {
  return function(dispatch) {
    dispatch(requestCats());

    fetch('/data.json')
      .then(response => response.json)
      .then(json =>
        dispatch(receiveCats(json));
      )
  }
}
