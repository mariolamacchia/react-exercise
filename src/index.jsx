import React, { Component } from 'react';
import { render } from 'react-dom';
import { createHistory } from 'history';
import { Route } from 'react-router';
import { combineReducers, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import App, { Component1, Component2 } from './app.jsx';

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
});

const store = compose(
  reduxReactRouter({ createHistory }),
  // devTools()
)(createStore)(reducer);

render(<Root/>, document.querySelector("#app"));
