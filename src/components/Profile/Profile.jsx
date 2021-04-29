import './Profile.css'

import React, {Component} from "react";
import {Header} from "../Header";

export class Profile extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="profile-info">
          <h1>Добро пожаловать в ваш профиль!</h1>
          <p>Скоро тут будет много нового!</p>
        </div>
      </div>
    );
  }
}