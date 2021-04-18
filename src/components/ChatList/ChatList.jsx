import './ChatList.css'

import React, {Component} from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'

export class ChatList extends Component {
  render() {
    return (
      <List component="nav" aria-label="contacts">
        <ListItem button>
          <ListItemText primary="First Chat" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Second Chat" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Third Chat" />
        </ListItem>
      </List>
    );
  }
}

