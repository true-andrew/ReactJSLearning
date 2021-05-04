import './Messenger.css'

import React, {Component} from "react";

import {MessagesList} from "components/MessagesList";
import {MessageForm} from "components/MessageForm";


export class Messenger extends Component {


  addNewMessage = (msg) => {
    const {chats} = this.state;
    const {chatId} = this.props;

    const chat = chats[chatId.id];
    chat.messages = this.messages.concat([msg]);

    this.setState({chats: {...this.state.chats, [chatId.id]: chat}});
  }

  get messages() {
    const {chatId, chats} = this.props;

    let messages = null;
    if (chatId && chats[chatId.id]) {
      messages = chats[chatId.id].messages;
    }

    return messages;
  }

  // componentDidUpdate(prevProps, prevState, snap) {
  //   const {chats} = this.state;
  //   const {chatId} = this.props;
  //
  //   const chat = chats[chatId.id];
  //
  //   if (this.messages) {
  //     const {author} = this.messages[this.messages.length - 1];
  //     if (author !== 'Robot') {
  //       setTimeout(() => {
  //         this.addNewMessage({text: `Hi, ${author}! I'm bot`, author: 'Robot'});
  //       }, 1000)
  //     }
  //   }
  // };

  render() {
    return (
      <div className="messenger">
        {this.messages ? <MessagesList messages={this.messages}/> : 'Пожалуйста, выберите чат, чтобы продолжить'}
        {this.messages && <MessageForm onSend={this.addNewMessage}/>}
      </div>
    );
  }
}