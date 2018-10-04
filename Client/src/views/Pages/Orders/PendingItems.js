import React, {Component} from 'react';
import { Badge, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane ,Card ,Table , CardBody , CardHeader} from 'reactstrap';
import { Link } from "react-router-dom";

class PendingItems extends Component {

constructor(props){

    super(props);

    this.state={

        item:props.item
    }

    

}

getId(){
    this.props.orderId(this.state.item.orderId)
    console.log('Hello form the items {this.state.item.orderId})');
}

  render() {
      if(this.state.item.status=="Pending"){
    return (
        <tr onClick={this.getId.bind(this)}>
                    <td>{this.state.item.orderId}</td>
                    <td>{this.state.item.constructorId}</td>
                    <td>{this.state.item.orderDate}</td>
                    <td></td>
                    <td></td>
                    <td> 
                    <Badge color="warning">{this.state.item.status}</Badge>
                    </td>
        </tr>
    )}
    else return null;

  }
}

export default PendingItems;