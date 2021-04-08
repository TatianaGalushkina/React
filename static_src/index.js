import React from "react";
import ReactDOM from "react-dom";
import Router from "./components/Router.jsx";
import Header from "./components/Header.jsx";
import { BrowserRouter } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider>
        <Header />
      <Router />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
