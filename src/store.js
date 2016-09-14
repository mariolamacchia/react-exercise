import { compose, createStore, applyMiddleware } from 'redux';
import { responsiveStoreEnhancer } from 'redux-responsive';
import { reduxReactRouter } from 'redux-router';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createHistory } from 'history';
import reducer from  './reducers';

const loggerMiddleware = createLogger();

export default compose(
  reduxReactRouter({ createHistory }),
  responsiveStoreEnhancer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
  // devTools()
)(createStore)(reducer);
