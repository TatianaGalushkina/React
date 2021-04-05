import React from 'react';
import App from './MessageField.jsx';
import ChatList from './ChatList.jsx';
import '../styles/styles.css';

export default class Layout extends React.Component {
   render() {
    return <div className="layout_data" >
            <ChatList />
            <App />
        </div>
   }
}
