import './ChatList.css'

import React, {Component} from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {IconButton, TextField} from "@material-ui/core";
import {Link} from "react-router-dom";

export class ChatList extends Component {
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
    if (this.state.input.length > 0) {
      this.props.addChat(this.state.input);
      this.setState({ input: '' });
    }
  };

  render() {
    const { chats } = this.props;
    return (
      <List component="nav" aria-label="contacts">
        {chats.map((chat, idx)=>
          <Link to={chat.link} className="link" key={idx}>
            <ListItem button>
              <ListItemText primary={chat.name} />
            </ListItem>
          </Link>
        )}
        <ListItem>
          <TextField id="newChat" type="text" name='input' label='New chat' onChange={this.handleChange} onKeyUp={this.handleKeyUp} value={this.state.input}/>
          <IconButton color='primary' onClick={this.handleAddChat}>
            <AddCircleIcon fontSize='large'/>
          </IconButton>
        </ListItem>
      </List>
    );
  }
}

