import React, {Component} from 'react';
import { Badge, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane ,Card ,Table , CardBody , CardHeader} from 'reactstrap';
import { Link } from "react-router-dom";

class SupplierItems extends Component {

constructor(props){

    super(props);

    this.state={

        item:props.item
    }


}

  render() {

    return (
        <tr>
                    <td>{this.state.item.supplierId}</td>
                    <td>{this.state.item.name}</td>
                    <td>{this.state.item.address}</td>
                    <td>{this.state.item.rating}</td>
            
        </tr>
    )

  }
}

export default SupplierItems;