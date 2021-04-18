import './Messenger.css'

import React, {Component} from "react";

import {MessagesList} from "../MessagesList";
import {MessageForm} from "../MessageForm";

export class Messenger extends Component {
  state = {
    messages: [
      {text: "Hi, I'm Bot", author: "Robot"}
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
      <div className="messenger">
        <MessagesList messages={this.state.messages}/>
        <MessageForm onSend={this.addNewMessage}/>
      </div>
    );
  }
}