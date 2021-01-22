import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
    render() {
        return (
            <div class='containerProduct'>
              <img class='imgProduct' src={this.props.product.src}/>
              <div class='flexTitle'>
                <h2>{this.props.product.name}</h2>
                <p id='productDescription'>{this.props.product.description}</p>
                <h2>{`${this.props.product.price} €`}</h2>
              </div>
            </div>
            );
      }
    }

export default Product;