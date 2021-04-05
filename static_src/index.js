import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Layout from './components/Layout.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
    <MuiThemeProvider>
       <Header />
       <Layout />
   </MuiThemeProvider>,
   document.getElementById('root'),
);