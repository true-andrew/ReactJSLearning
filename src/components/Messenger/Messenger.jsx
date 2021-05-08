import './Messenger.css'

import React, {Component} from "react";

import {MessagesList} from "components/MessagesList";
import {MessageForm} from "components/MessageForm";

export class Messenger extends Component {
  render() {
    const {messages, sendMessage} = this.props;
    return (
      <div className="messenger">
        {messages ? <MessagesList messages={messages}/> : 'Пожалуйста, выберите чат, чтобы продолжить'}
        {messages && <MessageForm onSend={sendMessage}/>}
      </div>
    );
  }
}