import './Layout.css'

import React, {Component} from "react";
import {Header} from "components/Header";
import {ChatListRedux} from "containers/ChatListContainer";
import {Messenger} from "components/Messenger";

export class Layout extends Component {
  render() {
    return (
      <div className="workspace">
        <Header/>
        <ChatListRedux chats={this.props.chats}/>
        <Messenger messages={this.props.messages} sendMessage={this.props.sendMessage}/>
      </div>
    )
  }
}