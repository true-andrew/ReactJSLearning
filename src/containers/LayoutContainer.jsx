import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {sendMessage} from "actions/chats";

import {Layout} from "components/Layout";

class LayoutContainer extends PureComponent {
  handleMessageSend = (message) => {
    const {sendMessage, chatId} = this.props;

    sendMessage({
      ...message,
      chatId
    })
  }

  render() {
    const {messages} = this.props;
    return (
      <Layout sendMessage={this.handleMessageSend} messages={messages}/>
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
    messages,
    chatId: match ? match.params.id : null,
  }
}

function mapDispatchToProps() {
  return {
    sendMessage,
  }
}

export const LayoutRedux = connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);