import React, {Component} from "react";
import {MessageList} from "./MessageList";
import {MessageForm} from "./MessageForm";

export class Messenger extends Component {
  state = {
    messages: [
      {
        text: 'First Msg',
        author: 'Human'
      },
    ],
  };

  addNewMessage = (msg) => {
    this.setState({messages: [...this.state.messages, msg]});
  }

  componentDidUpdate() {
    const lastMessage = this.state.messages[this.state.messages.length - 1];
    if (lastMessage.author !== 'Robot') {
      this.setState({messages: [...this.state.messages, {text: `Hi, ${lastMessage.author}`, author: 'Robot'}]});
    }
  };

  render() {
    return (
      <div>
        <MessageList messages={this.state.messages}/>
        <MessageForm onSend={this.addNewMessage}/>
      </div>
    );
  }
}