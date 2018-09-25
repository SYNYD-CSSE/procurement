import React, {Component} from 'react';
import { Badge, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane ,Card ,Table , CardBody , CardHeader} from 'reactstrap';
import { Link } from "react-router-dom";

class PendingItems extends Component {

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
                    <td>{this.state.item._id}</td>
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