import React, {Component} from 'react';
import { Badge, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane ,Card ,Table , CardBody , CardHeader} from 'reactstrap';
import { Link } from "react-router-dom";
//import edit from '@material-ui/icons/edit';
//import delete_forever from '@material-ui/icons/delete_forever';
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
                    <td>{this.state.item.orderItemId}</td>
                    <td>{this.state.item.name}</td>
                    <td>{this.state.item.unit}</td>
                    <td>{this.state.item.quantity}</td>  
                    {/* <td>  <i className="cui-pencil icons font-2xl d-block mt-4" ></i></td>
                    <td> <i className="cui-trash icons font-2xl d-block mt-4" ></i></td>   */}
               
        </tr>
    )
    

  }
}

export default ChangeItems;


