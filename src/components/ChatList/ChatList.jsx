import './ChatList.css'

import React, {Component} from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import {Link} from "react-router-dom";

export class ChatList extends Component {
  render() {
    return (
      <List component="nav" aria-label="contacts">
        <Link to="/chat/1" className="link">
          <ListItem button>
            <ListItemText primary="First Chat" />
          </ListItem>
        </Link>
        <Link to="/chat/2" className="link">
          <ListItem button>
            <ListItemText primary="Second Chat" />
          </ListItem>
        </Link>
        <Link to="/chat/3" className="link">
          <ListItem button>
            <ListItemText primary="Third Chat" />
          </ListItem>
        </Link>

      </List>
    );
  }
}

