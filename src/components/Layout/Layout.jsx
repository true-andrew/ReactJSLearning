import './Layout.css'

import React, {Component} from "react";
import {Header} from "../Header";
import {ChatList} from "../ChatList";
import {Messenger} from "../Messenger";

export class Layout extends Component {

  render() {
    return (
      <div className="workspace">
        <Header/>
        <ChatList />
        <Messenger chatId={this.props.match.params}/>
      </div>
    )
  }
}