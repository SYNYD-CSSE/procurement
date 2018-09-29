import React, {Component} from 'react';
import { Badge, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane ,Card ,Table , CardBody , CardHeader} from 'reactstrap';
import { Link } from "react-router-dom";
import StarRatings from 'react-star-ratings';

class BlacklistedSuppliers extends Component {

constructor(props){

    super(props);

    this.state={

        item:props.item,
        rating:0
    }


}

componentWillMount(){

    this.setState({rating:this.state.item.rating})

}
componentDidUpdate(prevProps){

    if(this.props.rating!=prevProps.rating){
        this.setState({rating:this.state.item.rating})
    }
 }

  render() {

    if(this.state.rating < 3){
    return (
        <tr>
                    <td>{this.state.item.supplierId}</td>
                    <td>{this.state.item.name}</td>
                    <td>{this.state.item.address}</td>
                    <td> <StarRatings
          rating={this.state.rating}
          starRatedColor="red"
          numberOfStars={5}
          starDimension="30px"
          name='rating' /> </td>     
        </tr>
    )
    }
    else return null;

  }
}

export default BlacklistedSuppliers;