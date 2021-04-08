import React from "react";
import App from "./MessageField.jsx";
import ChatList from "./ChatList.jsx";
import PropTypes from "prop-types";

import "../styles/styles.css";

export default class Layout extends React.Component {
  static propTypes = {
    chatId: PropTypes.number,
  };

  static defaultProps = {
    chatId: 1,
  };

  render() {
    return (
      <div className="layout_data">
        <ChatList />
        <App chatId={this.props.chatId} />
      </div>
    );
  }
}
