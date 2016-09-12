import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './index.scss';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1>It Works!</h1>
          <p>This React project just works including <span className={styles.blueBg}>module</span> local styles.</p>
          <p>Global bootstrap css import works too as you can see on the following button.</p>
          <p><a className="btn btn-primary btn-lg">Enjoy!</a></p>
          <RaisedButton label="Default" />
        </div>
      </MuiThemeProvider>

    )
  }
}
