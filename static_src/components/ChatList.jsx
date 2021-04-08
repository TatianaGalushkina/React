import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "material-ui";

export default class Chat extends React.Component {
  state = {
    chat: ["Первый чат", "Второй чат", "Третий чат"],
  };
  render() {
    const chatElements = this.state.chat.map((chat, index) => (
      <Link to={"/chat/" + (index + 1) + "/"}>
        <ListItem key={index}>{chat}</ListItem>
      </Link>
    ));

    return (
      <div className="chat_list">
        <List>{chatElements}</List>
      </div>
    );
  }
}
