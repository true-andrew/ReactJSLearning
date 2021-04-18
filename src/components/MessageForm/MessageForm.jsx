import './MessageForm.css'

import React, {Component} from "react";
import PropTypes from 'prop-types'

export class MessageForm extends Component {
  state = {
    text: '',
    author: '',
  };

  static propTypes = {
    onSend: PropTypes.func,
  }

  handleClick = () => {
    const {onSend} = this.props;

    if (typeof(onSend) === "function") {
      onSend(this.state);

      this.setState( {
        text: '',
      });
    }
  };

  handleInputChange = (event) => {
    const fieldName = event.target.name;

    this.setState({
      [fieldName]: event.target.value
    });
  };

  handleEnterDown = (event) => {
    if (event.ctrlKey && event.keyCode === 13) {
      this.handleClick(event);
    }
  };

  render() {
    return (
      <div className="message-form">
        <input name="author" onChange={this.handleInputChange} type="text" value={this.state.author}/><br/>
        <textarea name="text" onKeyDown={this.handleEnterDown} onChange={this.handleInputChange} value={this.state.text}/><br/>
        <button onClick={this.handleClick}>Отправить сообщение</button>
      </div>
    );
  }
}