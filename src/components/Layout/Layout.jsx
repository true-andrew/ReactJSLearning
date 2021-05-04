import './Layout.css'

import React, {Component} from "react";
import {Header} from "components/Header";
import {ChatList} from "components/ChatList";
import {Messenger} from "components/Messenger";

export class Layout extends Component {
  render() {
    return (
      <div className="workspace">
        <Header/>
        <ChatList chats={this.props.chats} addChat={this.props.addChat}/>
        <Messenger messages={this.props.messages} sendMessage={this.props.sendMessage}/>
      </div>
    )
  }
}