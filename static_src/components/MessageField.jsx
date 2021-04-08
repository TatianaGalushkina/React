import React from 'react';
import Message from './Message.jsx';
import { AUTHORS } from "./utils/const.js";
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import '../styles/styles.css';

export default class MessageField extends React.Component {
   state = {
    chats: {
        1: {title: 'Чат 1', messageList: [1]},
        2: {title: 'Чат 2', messageList: [2]},
        3: {title: 'Чат 3', messageList: []},
    },

       messages: {
        1: {author: AUTHORS.BOT, text: "Привет"},
        2: {author: AUTHORS.BOT, text: "Как дела?"}    
       },
        input :'',
   };
   componentDidUpdate(prevProps, prevState) {
    const { messages } = this.state;
    if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
        Object.values(messages)[Object.values(messages).length - 1].author === AUTHORS.ME) {
        setTimeout(() =>
            this.handleSendMessage('Не приставай ко мне, я робот!', AUTHORS.BOT), 1000);
    }
}

handleSendMessage = (message, author) => {
    const { messages, chats, input } = this.state;
    const { chatId } = this.props;

    if (input.length > 0 || author === AUTHORS.BOT) {
        const messageId = Object.keys(messages).length + 1;
        this.setState({
            messages: {...messages,
                [messageId]: {text: message, author: author}},
            chats: {...chats,
                [chatId]: { ...chats[chatId],
                    messageList: [...chats[chatId]['messageList'], messageId]
                }
            },
        })
    }
    if (author === AUTHORS.ME) {
        this.setState({ input: '' })
    }
};

handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
};

handleKeyUp = (event) => {
    if (event.keyCode === 13) { // Enter
        this.handleSendMessage(this.state.input, 'me')
    }
};


render() {
    const { messages, chats } = this.state;
    const { chatId } = this.props;

    const messageElements = chats[chatId].messageList.map((messageId, index) => (
        <Message
            key={ index }
            text={ messages[messageId].text }
            author={ messages[messageId].author }
        />));
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
