import React from 'react';
import { List, ListItem } from 'material-ui';

export default class Chat extends React.Component {
    state = {
        chat: ["Первый чат", "Второй чат", "Третий чат"],
    };
    render() {
        const chatElements = this.state.chat.map((chat, index) => (
            <ListItem key={ index }>{ chat }</ListItem>));
 
    return     <div className="chat_list" >
            <List >
                {chatElements}            
            </List>
        </div>
   }
}