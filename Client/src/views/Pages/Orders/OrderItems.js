import React, {Component} from 'react';
import { Badge, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane ,Card ,Table , CardBody , CardHeader} from 'reactstrap';
import { Link } from "react-router-dom";

class OrderItems extends Component {

constructor(props){

    super(props);

    this.state={

        item:props.item
    }

    console.log('Hello form the items');

}

  render() {
      if(this.state.item.status=="Pending"){
    return (
        <tr>
                    <td>{this.state.item.orderId}</td>
                    <td>{this.state.item.constructorId}</td>
                    <td>{this.state.item.orderDate}</td>
                    <td>{this.state.item.approvedDate}</td>
                    <td>{this.state.item.rejectedDate}</td>
                    <td> 
                  <h4><Badge color="warning">{this.state.item.status}</Badge></h4>
                    </td>
        </tr>
    )}
    else if(this.state.item.status=="Approved"){
        return(
    <tr>
        <td>{this.state.item.orderId}</td>
        <td>{this.state.item.constructorId}</td>
        <td>{this.state.item.orderDate}</td>
        <td>{this.state.item.approvedDate}</td>
        <td>{this.state.item.rejectedDate}</td>
        <td> 
        <Badge color="success">{this.state.item.status}</Badge>
        </td>
    </tr>

        )}
        else if(this.state.item.status=="Declined"){
            return(
        <tr>
            <td>{this.state.item.orderId}</td>
            <td>{this.state.item.constructorId}</td>
            <td>{this.state.item.orderDate}</td>
            <td>{this.state.item.approvedDate}</td>
            <td>{this.state.item.rejectedDate}</td>
            <td> 
            <Badge color="danger">{this.state.item.status}</Badge>
            </td>
        </tr>
    
            )}
            else if(this.state.item.status=="Placed"){
                return(
            <tr>
                <td>{this.state.item.orderId}</td>
                <td>{this.state.item.constructorId}</td>
                <td>{this.state.item.orderDate}</td>
                <td>{this.state.item.approvedDate}</td>
                <td>{this.state.item.rejectedDate}</td>
                <td> 
                <Badge color="primary">{this.state.item.status}</Badge>
                </td>
            </tr>
        
                )}
  }
}

export default OrderItems;