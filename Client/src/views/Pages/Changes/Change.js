import React,{Component} from 'react';
import { Link } from "react-router-dom";
import { Badge, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane ,Card ,Table , CardBody , CardHeader} from 'reactstrap';
import classnames from 'classnames';




class Changes extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          orders:[],
          items:[]
        };

      }
    
      componentWillMount(){

        // fetch(`/api/prescriptions/${this.state.user.pid}/${this.state.user.bht}`)

        const {orderId} =this.props.match.params;
   
        fetch(`/orders/${orderId}`)
   
           .then(res=>res.json())
            .then(orders=> this.setState({orders},()=> console.log(orders)));

            this.setState({items:this.state.orders.items})
   
     }


      
  
    render(){
      
      // var orderItems = this.state.suppliers.map((suppliers,i)=>{

      //   return(
      //     <SupplierItems key={suppliers.id} item={suppliers}/>
      //   )
      // });


      
        return(
  
            <div className="animated fadeIn">
     
     
              <Card>
              {/* <CardHeader>
                <i className="fa fa-align-justify"></i> Simple Table
              </CardHeader> */}
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>Item ID</th>
                    <th>Item Name</th>
                    <th>Quantity</th>
                  </tr>
                  </thead>
                  <tbody>
               
                  </tbody>
                </Table>
                </CardBody>
                </Card>
          
              </div>
            );
       }
  }
  
  
  export default Changes; 	
  