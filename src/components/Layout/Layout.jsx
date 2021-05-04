import './Layout.css'

import React, {Component} from "react";
import {Header} from "components/Header";
import {ChatList} from "components/ChatList";
import {MessengerRedux} from "containers/MessengerContainer";

export class Layout extends Component {
  render() {
    return (
      <div className="workspace">
        <Header/>
        <ChatList />
        <MessengerRedux match={this.props.match}/>
      </div>
    )
  }
}