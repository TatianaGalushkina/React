import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Profile from "./Profile.jsx";

export default class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/profile/" component={Profile} />
        <Route exact path="/" component={Layout} />
        <Route
          exact
          path="/chat/:chatId/"
          render={(obj) => <Layout chatId={Number(obj.match.params.chatId)} />}
        />
      </Switch>
    );
  }
}
