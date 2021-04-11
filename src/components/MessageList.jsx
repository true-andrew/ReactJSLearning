import React, {Component} from "react";
import PropTypes from 'prop-types'
import {Message} from "./Message";

export class MessageList extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired
  }
  render() {
    const messageElements = this.props.messages.map((msg, index) => (
      <Message key={index} text={msg.text} author={msg.author} />
    ));
    return (
      <div>
        {messageElements}
      </div>
    );
  }
}