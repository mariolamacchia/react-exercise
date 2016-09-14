import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

import store from './store';
import App from './components/app';
import Home from './components/home';
import Breed from './components/breed';

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxRouter>
          <Route path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path=":breed" component={Breed}></Route>
          </Route>
        </ReduxRouter>
      </Provider>
    )
  }
}

render(<Root/>, document.querySelector("#app"));
