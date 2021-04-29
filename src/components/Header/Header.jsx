import './Header.css'

import React, {Component} from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link} from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/" className="link">
          <h1 className="main-heading">Messenger</h1>
        </Link>
        <Link to="/profile" className="link">
          <AccountCircleIcon className="profile-icon"/>
        </Link>

      </header>
    )
  }
}