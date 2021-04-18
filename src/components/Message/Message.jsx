import React, { Component } from "react";
import './Message.css'
import PropTypes from 'prop-types'

export class Message extends Component {
  static propTypes = {
    author: PropTypes.string,
    text: PropTypes.string.isRequired,
  };

  static defaultProps = {
    author: 'Unknown',
  }

  render() {
    return (
      <div>
        {this.props.author}: {this.props.text}
      </div>
    );
  }
}