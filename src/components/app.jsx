/**
 * App
 *
 * Main app component
 */
import React from 'react';
import { connect, dispatch } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import { fetchCats } from '../actions';

injectTapEventPlugin();

export default class App extends React.Component {
  componentDidMount() {
    this.props.fetchCats();
  }

  render() {
    const { isFetching } = this.props;
    const loaderStyle = {
      position: 'fixed',
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, .8)',
      zIndex: '3000'
    };

    return (
      <MuiThemeProvider>
        <div>
          {isFetching &&
            <div style={loaderStyle}><CircularProgress size={2} /></div>
          }
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.node,
  isFetching: React.PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { isFetching } = state.cats;
  return { isFetching };
}

export default connect(mapStateToProps, { fetchCats })(App);
