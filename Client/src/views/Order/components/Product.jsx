import React, { Component } from "react";
import Counter from "./Counter";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: {},
      isAdded: false
    };
  }
  addToCart(name, id, quantity) {
    this.setState(
      {
        selectedProduct: {

          name: name,
          id: id,
          quantity: quantity
        }
      },
      function() {
        this.props.addToCart(this.state.selectedProduct);
      }
    );
    this.setState(
      {
        isAdded: true
      },
      function() {
        setTimeout(() => {
          this.setState({
            isAdded: false,
            selectedProduct: {}
          });
        }, 3500);
      }
    );
  }

  render() {

    let name = this.props.name;
    let id = this.props.id;
    let quantity = this.props.productQuantity;
    return (
      <div className="product">

        <h4 className="product-name">{this.props.name}</h4>
        <Counter
          productQuantity={quantity}
          updateQuantity={this.props.updateQuantity}
          resetQuantity={this.resetQuantity}
        />
        <div className="product-action">
          <button
            className={!this.state.isAdded ? "" : "added"}
            type="button"
            onClick={this.addToCart.bind(
              this,
              name,
              id,
              quantity
            )}
          >
            {!this.state.isAdded ? "ADD TO ORDER" : "✔ ADDED"}
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
