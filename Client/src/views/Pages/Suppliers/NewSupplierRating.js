import React, {Component} from 'react';
import { Badge, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane ,Card ,Table , CardBody , CardHeader} from 'reactstrap';
import { Link } from "react-router-dom";
import StarRatings from 'react-star-ratings';

class NewSupplierRating extends Component {

constructor(props){

    super(props);

    this.state={
        item:props.item,
        rating:0
    }
    this.changeRating=this.changeRating.bind(this)

}

componentWillMount(){

    this.setState({rating:this.state.item.rating})

}


changeRating( newRating, name ) {
    console.log(this.state.rating);


    const updateRating={
        rating:newRating
          }
 
              fetch(`/suppliers/supplier/update/rating/${this.state.item.supplierId}`,{
                      method:'PUT',
                      headers:{
                          'Accept':'application/json,text/plain,*/*',
                          'Content-Type': 'application/json'
  
                      },
                          body: JSON.stringify(updateRating)
  
                  })
                  .then(this.setState({rating:newRating}))

                    //   .then((res)=>res.json())
                    //     .then(alert("New Rating Added sucessfully "))
}

  render() {

    return (
        <tr onC>
                    <td>{this.state.item.supplierId}</td>
                    <td>{this.state.item.name}</td>
                    <td>{this.state.item.address}</td>
                    <td> <StarRatings
          rating={this.state.rating}
          starRatedColor="gold"
          numberOfStars={5}
          starDimension="30px"
          changeRating={this.changeRating}
          name='rating' /> </td>     
        </tr>
    )

  }
}

export default NewSupplierRating;