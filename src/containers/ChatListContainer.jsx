import React, {PureComponent} from "react";
import {connect} from "react-redux";

import {ChatList} from "components/ChatList";
import {createChat, removeChat, listen} from "actions/chats";
import {push} from "connected-react-router";

class ChatListContainer extends PureComponent {
  state = {
    input: '',
  };

  componentDidMount() {
    const {listen} = this.props;
    listen();
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleKeyUp = (event) => {
    if (event.keyCode === 13) { // Enter
      this.handleAddChat();
    }
  };

  handleAddChat = () => {
    const {createChat} = this.props;
    if (this.state.input.length > 0) {
      createChat(this.state.input);
      this.setState({input: ''});
    }
  };

  handleRemoveChat = (chatId) => () => {
    const {removeChat} = this.props;
    removeChat(chatId);
  };

  handleNavigate = (link) => {
    const {push} = this.props;
    push(link);
  };

  render() {
    const {chats} = this.props;
    return (
      <ChatList addChat={this.handleAddChat}
                removeChat = {this.handleRemoveChat}
                chats={chats}
                input={this.state.input}
                handleChange={this.handleChange}
                handleKeyUp={this.handleKeyUp}
                handleNavigate={this.handleNavigate}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const chats = state.chats.get('entries');

  return {
    chats: chats.sortBy((entry) => -entry.get('timestamp')).map((entry) => ({
      name: entry.get('chatName'),
      chatId: entry.get('_id'),
      notification: entry.get('notification')
    })).toList().toJS(),
  }

}

const mapDispatchToProps = dispatch => {
  return {
    push: (link) => dispatch(push(link)),
    createChat,
    listen: () => dispatch(listen()),
    removeChat: (chatId) => dispatch(removeChat(chatId))
  }
}

export const ChatListRedux = connect(mapStateToProps, mapDispatchToProps)(ChatListContainer);