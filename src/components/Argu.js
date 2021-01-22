import React, { Component } from 'react';
import './Argu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class Argu extends Component {
    render() {
      return (
        <div class='containerArgu'>
          <FontAwesomeIcon className='icon' icon={this.props.argu.src}/>
          <div class='flexArgu'>
            <h3>{this.props.argu.name}</h3>
            <p>{this.props.argu.description}</p>
          </div>
        </div>
        );
      }
    }

export default Argu;