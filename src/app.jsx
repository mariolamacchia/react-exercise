import styles from './index.scss';

import React from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

injectTapEventPlugin();

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1>It Works!</h1>
            {this.props.children}
          <RaisedButton label="Default" />
        </div>
      </MuiThemeProvider>
    )
  }
}
export class Component1 extends React.Component {
  render() {
    return (
      <span>c1</span>
    )
  }
}
export class Component2 extends React.Component {
  render() {
    return (
      <span>c2</span>
    )
  }
}
