import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
    render() {
        return (
        <div id='divHeader'>
          <img class='imgHeader' src='https://media.begeek.fr/2020/06/robot-Sony-Aibo.jpg'/>
            <h1 class="top-left title">Optez pour un robot de compagnie</h1>
            <p class="top-left baseline">Comme un vrai chien, mais quand même en moins relou</p>
        </div>
        );
      }
    }

export default Header;