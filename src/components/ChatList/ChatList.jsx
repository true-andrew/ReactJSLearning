import './ChatList.css'

import React, {Component} from "react";

export class ChatList extends Component {
  render() {
    return (
      <div className="chat-list">
        <div className="chat">
          <h1 className="chat-name">First Chat</h1>
          <p className="lastMessage">empty</p>
        </div>
        <div className="chat">
          <h1 className="chat-name">Second Chat</h1>
          <p className="chat-lastMessage">empty</p>
        </div>
      </div>
    )
  }
}