import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route, IndexRoute } from 'react-router';

import { createHistory } from 'history';

import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';

import { fetchCats } from './actions';
import { cats } from './reducers'

import App from './components/app';
import CatsList from './components/cats-list';
import CatBreedsList from './components/cat-breeds-list';

const reducer = combineReducers({
  router: routerStateReducer,
  cats
});

const loggerMiddleware = createLogger();

const store = compose(
  reduxReactRouter({ createHistory }),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
  // devTools()
)(createStore)(reducer);

store.dispatch(fetchCats());

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxRouter>
          <Route path="/" component={App}>
            <IndexRoute component={CatBreedsList}></IndexRoute>
            <Route path=":breed" component={CatsList}></Route>
          </Route>
        </ReduxRouter>
      </Provider>
    )
  }
}

render(<Root/>, document.querySelector("#app"));
