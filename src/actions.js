import fetch from 'isomorphic-fetch'

export const REQUEST_CATS = 'REQUEST_CATS';
export const RECEIVE_CATS = 'RECEIVE_CATS';
export const FAIL_CATS_REQUEST = 'FAIL_CATS_REQUEST';

function requestCats() {
  return {
    type: REQUEST_CATS
  };
}

function receiveCats(cats) {
  return {
    type: RECEIVE_CATS,
    cats
  };
}

function failCatsRequest(error) {
  return {
    type: FAIL_CATS_REQUEST,
    error
  };
}


export function fetchCats() {
  return function(dispatch) {
    dispatch(requestCats());

    // Get data.json
    fetch('/data.json')
      .then(parseResponse)
      // For each breed of cats, take a list from the subreddit
      .then(json => {
        let promises = json.breeds.map(breed => {
          return fetch('https://www.reddit.com/r/' + breed.subreddit + '/.json')
            .then(parseResponse);
        });
        return Promise.all(promises).then(subreddits => {
          // Store each subreddit response into its cat breed
          subreddits.forEach((subreddit, index) => {
            json.breeds[index].cats = getImagesFromSubreddit(subreddit);
          });
          return json.breeds;
        });
      })
      .then(
        json => dispatch(receiveCats(json)),
        error => dispatch(failCatsRequest(error))
      )
  }
}

function parseResponse(response) {
  if (response.status >= 400) {
    return Promise.reject(response.status);
  } else {
    return response.json();
  }
}

function getImagesFromSubreddit(subreddit) {
  let items = subreddit.data.children
    // Filter items with a preview
    .filter(post => !!(
      post.data.preview
    ))
    // Return the preview source
    .map(post => {
      // If for some reasons the preview source is missing return 404 image
      try {
        return post.data.preview.images[0].source
      } catch(e) {
        return { url: 'https://http.cat/404' };
      }
    });
  return items;
}
