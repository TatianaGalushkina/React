import React from 'react';
import Message from './Message.jsx';
import { AUTHORS } from "./utils/const.js";

export default class MessageField extends React.Component {
   state = {
       messages: [
        {
            author: AUTHORS.ME,
            text: "Привет"
        },
        {
            author: AUTHORS.ME,
            text: "Как дела?"
        }    
        ]
   };

   handleClick = () => {
       this.setState({ messages: [ ...this.state.messages, {author:AUTHORS.ME, text:'Нормально'} ] });
   };

   componentDidUpdate() {
    if (this.state.messages[this.state.messages.length-1].author == "me") {  // Остаток от деления на 2
        setTimeout(() =>
        this.setState(
            { messages: [ ...this.state.messages, {author:AUTHORS.BOT, text:'Не приставай ко мне, я робот!'} ] }),
        1000);
    }
}

render() {
       const messageElements = this.state.messages.map((mess, index) => (
           <Message key={ index } text={ mess.author + ": " + mess.text} />));

       return <div>
           { messageElements }
           <button onClick={ this.handleClick }>Отправить сообщение</button>
       </div>
   }
}
