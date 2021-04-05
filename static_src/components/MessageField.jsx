import React from 'react';
import Message from './Message.jsx';
import { AUTHORS } from "./utils/const.js";
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import '../styles/styles.css';

export default class MessageField extends React.Component {
   state = {
       messages: [
        {
            author: AUTHORS.BOT,
            text: "Привет"
        },
        {
            author: AUTHORS.BOT,
            text: "Как дела?"
        }    
        ],
        input :'',
   };
componentDidUpdate() {
    if (this.state.messages[this.state.messages.length-1].author == AUTHORS.ME) {  
        setTimeout(() =>
        this.setState(
            { messages: [ ...this.state.messages, {author:AUTHORS.BOT, text:'Не приставай ко мне, я робот!'} ] }),
        1000);
    }
}
handleClick = (message) => {
    this.sendMessage(message)
};

handleChange = (event) => {
    this.setState({ input: event.target.value });
};

handleKeyUp = (event, message) => {
    if (event.keyCode === 13) { // Enter
        this.sendMessage(message)
    }
};

sendMessage = (message) => {
    this.setState({ 
        messages: [ ...this.state.messages, {text: message, author: AUTHORS.ME} ],
        input:'', });    
};

render() {
       const messageElements = this.state.messages.map((mess, index) => (
           <Message key={ index }  text={ mess.author + ": " + mess.text} author={ mess.author } />));

       return <div className='layout'>
           <div className="message-field">
                { messageElements }
            </div>
            <div style={ { width: '100%', display: 'flex' } }>
               <TextField
                   name="input"
                   fullWidth={ true }
                   hintText="Введите сообщение"
                   style={ { fontSize: '22px' } }
                   onChange={ this.handleChange }
                   value={ this.state.input }
                   onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
               />
               <FloatingActionButton onClick={ () => this.handleClick(this.state.input) }>
                   <SendIcon />
               </FloatingActionButton>
           </div>
       </div>
   }
}
