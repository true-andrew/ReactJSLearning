import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {create, load, send} from "actions/chats";

import {Layout} from "components/Layout";

class LayoutContainer extends PureComponent {
  componentDidMount() {
    const {loadChats} = this.props;

    loadChats();
  }

  componentDidUpdate(prevProps, prevState, snap) {
    const {messages} = this.props;
    if (messages) {
      const {author} = messages[messages.length - 1];
      if (author !== 'Robot') {
        setTimeout(() => {
          this.handleMessageSend({text: `Hi, ${author}! I'm bot`, author: 'Robot'});
        }, 1000)
      }
    }
  };


  handleMessageSend = (message) => {
    const {sendMessage, chatId} = this.props;

    sendMessage({
      ...message,
      chatId
    })
  }

  render() {
    const {chats, messages, addChat} = this.props;
    return (
      <Layout sendMessage={this.handleMessageSend} messages={messages} chats={chats} addChat={addChat}/>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const chats = state.chats.get('entries');
  const {match} = ownProps;

  let messages = null;
  if (match.params && chats.has(match.params.id)) {
    messages = chats.getIn([match.params.id, 'messages']).toJS();
  }
  return {
    chats: chats.map((entry) => ({name: entry.get('chatName'), link: `/chat/${entry.get('id')}`})).toList().toJS(),
    messages,
    chatId: match ? match.params.id : null,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadChats: () => dispatch(load()),
    sendMessage: (message) => dispatch(send(message)),
    addChat: (chatName) => dispatch(create(chatName))
  }
}

export const LayoutRedux = connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);