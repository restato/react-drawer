import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CssBaseline from "@material-ui/core/CssBaseline";
import { pink } from "@material-ui/core/colors";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  palette: {
    primary: pink
  },
  layout: {
    drawerWidth: 232
  }
});

// Render app with theme and CSS baseline
ReactDOM.render(
    [
      <MuiThemeProvider theme={theme} key="app">
        <App />
      </MuiThemeProvider>,
      <CssBaseline key="css-baseline" />
    ],
    document.getElementById("root")
  );
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



