import './Message.css'

import React, { Component } from "react";
import PropTypes from 'prop-types'

export class Message extends Component {
  static propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };

  get direction() {
    return this.props.author === 'Robot' ? 'start' : 'end';
  }

  render() {
    const {author, text} = this.props;
    return (
      <div className="message" style={{alignSelf: `flex-${this.direction}`}}>
        <div>{text}</div>
        <div className="sender">{author}</div>
      </div>
    );
  }
}