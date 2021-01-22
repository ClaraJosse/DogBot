import React, { Component } from 'react';
import './Footer.css';


class Footer extends Component {
    render() {
      return (
        <div id='containerFooter'>
          <img class="imgFooter" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1aeHZumr24VZlm13YPEAZRGuGbRBGc7uSlQ&usqp=CAU'/>
          <div id='divParagraph'>
            <p class='textFooter'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p class='textFooter'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        );
      }
    }

export default Footer;