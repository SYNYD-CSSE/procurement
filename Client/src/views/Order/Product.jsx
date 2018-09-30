import React, { Component } from "react";
import Counter from "./Counter";
import axios from "axios";
import OrderService from "./OrderService";
import NotificationService, {
  NOTIF_ORDERLIST_CHANGED
} from "./NotificationService";

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
let ns = new NotificationService();
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // selectedProduct: {},
      // quickViewProdcut: {},
      isAdded: false,
      onOrderList: os.itemOnOrderList()
    };

    this.addToOrder = this.addToOrder.bind(this);
    this.onOrderListChanged = this.onOrderListChanged.bind(this);
  }

  addToOrder = () => {
    console.log("orderlist" + this.state.onOrderList);
    if (this.state.onOrderList) {
      os.removeOrderListItem(this.props.product);
    } else {
      os.addOrderListItem(this.props.product);
    }
    this.setState({
      isAdded: !this.state.isAdded
    });
  };

  componentDidMount() {
    ns.addObserver(NOTIF_ORDERLIST_CHANGED, this, this.onOrderListChanged);
  }
  componentWillUnmount() {
    ns.removeObserver(this, NOTIF_ORDERLIST_CHANGED);
  }

  onOrderListChanged(newOrderList) {
    this.setState({ orderList: os.itemOnOrderList(this.props.product) });
  }
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

    var btnClass;

    if (this.state.onOrderList) {
      btnClass = "btn btn-danger";
    } else {
      btnClass = "btn btn-primary";
    }

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
            <button className={btnClass} onClick={this.addToOrder}>
              {this.state.isAdded ? "REMOVE FROM ORDER" : "ADD TO ORDER"}
            </button>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default Product;
