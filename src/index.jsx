import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router';

import { createHistory } from 'history';

import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';

import App, { Component1, Component2 } from './app';
import { fetchCats } from './actions';
import { cats } from './reducers'

class Root extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <ReduxRouter>
            <Route path="/" component={App}>
              <Route path="1" component={Component1}></Route>
              <Route path="2" component={Component2}></Route>
            </Route>
          </ReduxRouter>
        </Provider>
      </div>
    )
  }
}

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

render(<Root/>, document.querySelector("#app"));
