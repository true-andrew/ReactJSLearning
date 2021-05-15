import React, {PureComponent} from "react";
import {connect} from "react-redux";

import {ChatList} from "components/ChatList";
import {create} from "actions/chats";
import {push} from "connected-react-router";

class ChatListContainer extends PureComponent {
  state = {
    input: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleKeyUp = (event) => {
    if (event.keyCode === 13) { // Enter
      this.handleAddChat();
    }
  };

  handleAddChat = () => {
    const {addChat} = this.props;
    if (this.state.input.length > 0) {
      addChat(this.state.input);
      this.setState({ input: '' });
    }
  };

  handleNavigate = (link) => {
    const {push} = this.props;
    // console.log(link)
    push(link);
  };

  render() {
    const {chats} = this.props;
    return (
      <ChatList addChat={this.handleAddChat}
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
    chats: chats.map((entry) => ({name: entry.get('chatName'), link: `/chat/${entry.get('id')}`, notification: entry.get('notification')})).toList().toJS(),
  }

}

const mapDispatchToProps = dispatch => {
  return {
    addChat: (chatName) => dispatch(create(chatName)),
    push: (link)=> dispatch(push(link))
  }
}

export const ChatListRedux = connect(mapStateToProps, mapDispatchToProps)(ChatListContainer);