import React, {Component} from 'react';
import { Badge, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane ,Card ,Table , CardBody , CardHeader} from 'reactstrap';
import { Link } from "react-router-dom";

class ChangeItems extends Component {

constructor(props){

    super(props);

    this.state={

        item:props.item
    }

    

}

// getId(){
//     this.props.orderId(this.state.item.orderId)
//     console.log('Hello form the items {this.state.item.orderId})');
// }

  render() {

    return (
        <tr>
                    <td>{this.state.item.itemId}</td>
                    <td>{this.state.item.name}</td>
                    <td>{this.state.item.unit}</td>
                    <td>{this.state.item.quantity}</td>     
        </tr>
    )
    

  }
}

export default ChangeItems;