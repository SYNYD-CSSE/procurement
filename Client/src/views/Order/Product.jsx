import React, { Component } from "react";
import Counter from "./Counter";
import axios from "axios";
import OrderService from "./OrderService";
import {
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  FormGroup,
  Label,
  Input
} from "reactstrap";
let os = new OrderService();
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // selectedProduct: {},
      // quickViewProdcut: {},
      isAdded: false
    };

    this.addToOrder = this.addToOrder.bind(this);
  }

  addToOrder = () => {
    os.addOrderListItem(this.props.product);
  };
  addToCart(name, quantity) {
    this.setState(
      {
        selectedProduct: {
          name: name,
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
  quickView(image, name, price, id) {
    this.setState(
      {
        quickViewProdcut: {
          image: image,
          name: name,
          price: price,
          id: id
        }
      },
      function() {
        this.props.openModal(this.state.quickViewProdcut);
      }
    );
  }
  render() {
    var myStyle = {
      width: "15rem",
      padding: "5px"
    };

    let name = this.props.name;
    let quantity = this.props.productQuantity;
    return (
      <div className="col-md-6">
        <Card className=" bg-info " style={myStyle}>
          <CardHeader className="text-dark font-weight-bold text-uppercase">
            {this.props.product.name}
          </CardHeader>
          <CardBody>
            <Counter
              productQuantity={quantity}
              updateQuantity={this.props.updateQuantity}
              resetQuantity={this.resetQuantity}
            />
          </CardBody>
          <CardFooter className=" bg-info">
            <button
              className="btn btn-success float-right"
              onClick={this.addToOrder}
            >
              {" "}
              {!this.state.isAdded ? "ADD TO CART" : "✔ ADDED"}
            </button>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default Product;
