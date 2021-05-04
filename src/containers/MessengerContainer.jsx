import React, {PureComponent} from "react";
import {connect} from "react-redux";

import {Messenger} from "components/Messenger";
import {load} from "actions/chats";

class MessengerContainer extends PureComponent {
  componentDidMount() {
    const {loadChats} = this.props;

    loadChats();
  }

  render() {
    const {chats, match} = this.props;
    return (
      <Messenger chatId={match.params} chats={chats}/>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    chats: state.chats.get('entries').toJS(),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadChats: () => dispatch(load())

  }
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);